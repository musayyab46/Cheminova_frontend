import React, { useState } from "react";
import AuthCard from "../components/AuthCard";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", formData);


      // save token
      localStorage.setItem("token", res.data);

      navigate("/");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <AuthCard
      title="Welcome Back!"
      subtitle="Login to continue to Cheminova"
      fields={[
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
      ]}
      buttonText="Login"
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      onSubmit={handleSubmit}
      switchAuth={() => navigate("/signup")}
    />
  );
};

export default LoginPage;