import React, { useState } from "react";
import AuthCard from "../components/AuthCard";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER", // default
    phone: "",
    address: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", {
        ...formData,
        age: Number(formData.age), // convert to number
      });

      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <AuthCard
      title="Create Your Account"
      subtitle="Sign up to get started with Cheminova"
      fields={[
        {
          type: "text",
          placeholder: "Name",
          onChange: (e) =>
            setFormData({ ...formData, name: e.target.value }),
        },
        {
          type: "email",
          placeholder: "Email",
          onChange: (e) =>
            setFormData({ ...formData, email: e.target.value }),
        },
        {
          type: "password",
          placeholder: "Password",
          onChange: (e) =>
            setFormData({ ...formData, password: e.target.value }),
        },
        {
          type: "text",
          placeholder: "Role (USER / ADMIN)",
          onChange: (e) =>
            setFormData({ ...formData, role: e.target.value }),
        },
        {
          type: "text",
          placeholder: "Phone",
          onChange: (e) =>
            setFormData({ ...formData, phone: e.target.value }),
        },
        {
          type: "text",
          placeholder: "Address",
          onChange: (e) =>
            setFormData({ ...formData, address: e.target.value }),
        },
        {
          type: "number",
          placeholder: "Age",
          onChange: (e) =>
            setFormData({ ...formData, age: e.target.value }),
        },
      ]}
      buttonText="Sign Up"
      footerText="Already have an account?"
      footerLinkText="Login"
      onSubmit={handleSubmit}
      switchAuth={() => navigate("/login")}
    />
  );
};

export default SignupPage;