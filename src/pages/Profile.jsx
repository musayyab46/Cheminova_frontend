// import { useEffect, useState } from "react";
// import API from "../services/api";

// import avatar1 from "../assets/member1.avif";
// // import avatar2 from "../assets/avatar2.png";
// // import avatar3 from "../assets/avatar3.png";
// // import avatar4 from "../assets/avatar4.png";

// const avatars = [avatar1];

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [selectedAvatar, setSelectedAvatar] = useState(
//     localStorage.getItem("avatar") || avatar1
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await API.get("/user/profile");
//         setUser(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleAvatarSelect = (avatar) => {
//     setSelectedAvatar(avatar);
//     localStorage.setItem("avatar", avatar);
//   };

//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* 🔥 HERO SECTION */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-4 md:px-10">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">

//           {/* Avatar */}
//           <img
//             src={selectedAvatar}
//             alt="avatar"
//             className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
//           />

//           {/* Info */}
//           <div className="text-center md:text-left">
//             <h1 className="text-2xl md:text-3xl font-bold">
//               {user?.name}
//             </h1>
//             <p className="opacity-90">{user?.email}</p>

//             <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3 text-sm">
//               <span className="bg-white/20 px-3 py-1 rounded-full">
//                 📍 {user?.address}
//               </span>
//               <span className="bg-white/20 px-3 py-1 rounded-full">
//                 🎂 {user?.age} yrs
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* 🔥 MAIN CONTENT */}
//       <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">

//         {/* 🔹 PROFILE CARD */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">

//           <div>
//             <p className="text-sm text-gray-500">Full Name</p>
//             <p className="font-semibold text-lg">{user?.name}</p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Email Address</p>
//             <p className="font-semibold text-lg">{user?.email}</p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Phone Number</p>
//             <p className="font-semibold text-lg">{user?.phone}</p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Age</p>
//             <p className="font-semibold text-lg">{user?.age}</p>
//           </div>

//           <div className="md:col-span-2">
//             <p className="text-sm text-gray-500">Address</p>
//             <p className="font-semibold text-lg">{user?.address}</p>
//           </div>

//         </div>

//         {/* 🔹 AVATAR SELECTION */}
//         <div className="bg-white rounded-2xl shadow-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">
//             Choose Your Avatar
//           </h2>

//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             {avatars.map((avatar, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleAvatarSelect(avatar)}
//                 className={`p-1 rounded-full cursor-pointer transition transform 
//                   ${
//                     selectedAvatar === avatar
//                       ? "ring-4 ring-indigo-500 scale-110"
//                       : "hover:scale-105"
//                   }`}
//               >
//                 <img
//                   src={avatar}
//                   alt="avatar"
//                   className="w-20 h-20 rounded-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 🔹 QUICK ACTIONS (Professional Touch) */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap gap-4 justify-center md:justify-start">

//           <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//             Edit Profile
//           </button>

//           <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
//             Change Password
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useEffect, useState } from "react";
import API from "../services/api";
import { X } from "lucide-react";

import avatar1 from "../assets/member1.avif";

const avatars = [avatar1];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(
    localStorage.getItem("avatar") || avatar1
  );

  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] = useState(false);
const [updating,setUpdating] = useState(false);
const [errors,setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/user/profile");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
  const newErrors = {};

  // Name
  if (!formData.name.trim()) {
    newErrors.name = "Name cannot be empty";
  }

  // Email
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    newErrors.email =
      "Email cannot be empty";
  } else if (
    !emailRegex.test(formData.email)
  ) {
    newErrors.email =
      "Enter a valid email";
  }

  // Phone (exactly 10 digits)
  const phoneRegex =
    /^[0-9]{10}$/;

  if (!formData.phone.trim()) {
    newErrors.phone =
      "Phone number cannot be empty";
  } else if (
    !phoneRegex.test(formData.phone)
  ) {
    newErrors.phone =
      "Phone number must contain exactly 10 digits";
  }

  // Address
  if (!formData.address.trim()) {
    newErrors.address =
      "Address cannot be empty";
  }

  // Age
  if (
    formData.age === "" ||
    formData.age === null
  ) {
    newErrors.age =
      "Age cannot be empty";
  } else if (
    isNaN(formData.age)
  ) {
    newErrors.age =
      "Age must be a number";
  } else if (
    Number(formData.age) <= 0
  ) {
    newErrors.age =
      "Age must be greater than 0";
  }

  setErrors(newErrors);

  return (
    Object.keys(newErrors)
      .length === 0
  );
};

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem("avatar", avatar);
  };

  const openEditModal = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      age: user?.age || "",
    });

    setShowEditModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    setUpdating(true);

    await API.patch(
      "/user/update-profile",
      formData
    );

    setShowEditModal(false);

    // refresh profile data
    await fetchProfile();

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
      "Failed to update profile"
    );

  } finally {
    setUpdating(false);
  }
};

const handleDeleteProfile = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete your profile?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete("/user/delete-profile");

    // clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");

    // redirect to signup
    window.location.href = "/signup";

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
      "Failed to delete profile"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">

          <img
            src={selectedAvatar}
            alt="avatar"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
          />

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">
              {user?.name}
            </h1>

            <p>{user?.email}</p>

            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                📍 {user?.address}
              </span>

              <span className="bg-white/20 px-3 py-1 rounded-full">
                🎂 {user?.age} yrs
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-lg">{user?.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-lg">{user?.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-lg">{user?.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-semibold text-lg">{user?.age}</p>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-lg">{user?.address}</p>
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Choose Your Avatar
          </h2>

          <div className="flex flex-wrap gap-4">
            {avatars.map((avatar,index)=>(
              <div
                key={index}
                onClick={()=>handleAvatarSelect(avatar)}
                className={`cursor-pointer rounded-full p-1 ${selectedAvatar===avatar ? "ring-4 ring-indigo-500":""}`}
              >
                <img
                  src={avatar}
                  className="w-20 h-20 rounded-full"
                  alt="avatar"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap gap-4">

          <button
            onClick={openEditModal}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Edit Profile
          </button>

          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-200 shadow-md" onClick={handleDeleteProfile}>
            Delete Account
          </button>

        </div>

      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold mb-6">
              Update Profile
            </h2>

            <form onSubmit={handleUpdateProfile} className="space-y-5">

  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Full Name
    </label>

    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your full name"
      className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition
      ${
        errors.name
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-indigo-500"
      }`}
    />

    {errors.name && (
      <p className="text-red-500 text-sm mt-1">
        {errors.name}
      </p>
    )}
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email Address
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition
      ${
        errors.email
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-indigo-500"
      }`}
    />

    {errors.email && (
      <p className="text-red-500 text-sm mt-1">
        {errors.email}
      </p>
    )}
  </div>

  {/* Phone */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Phone Number
    </label>

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter phone number"
      className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition
      ${
        errors.phone
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-indigo-500"
      }`}
    />

    {errors.phone && (
      <p className="text-red-500 text-sm mt-1">
        {errors.phone}
      </p>
    )}
  </div>

  {/* Address */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Address
    </label>

    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter your address"
      className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition
      ${
        errors.address
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-indigo-500"
      }`}
    />

    {errors.address && (
      <p className="text-red-500 text-sm mt-1">
        {errors.address}
      </p>
    )}
  </div>

  {/* Age */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Age
    </label>

    <input
      type="number"
      name="age"
      value={formData.age}
      onChange={handleChange}
      placeholder="Enter age"
      className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 transition
      ${
        errors.age
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-indigo-500"
      }`}
    />

    {errors.age && (
      <p className="text-red-500 text-sm mt-1">
        {errors.age}
      </p>
    )}
  </div>

  <button
    type="submit"
    disabled={updating}
    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] disabled:opacity-50 transition-all"
  >
    {updating ? "Updating..." : "Save Changes"}
  </button>

</form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Profile;


