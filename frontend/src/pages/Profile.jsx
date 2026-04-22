import { useEffect, useState } from "react";
import API from "../services/api";

import avatar1 from "../assets/member1.avif";
// import avatar2 from "../assets/avatar2.png";
// import avatar3 from "../assets/avatar3.png";
// import avatar4 from "../assets/avatar4.png";

const avatars = [avatar1];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(
    localStorage.getItem("avatar") || avatar1
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/user/profile");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem("avatar", avatar);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <img
            src={selectedAvatar}
            alt="avatar"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">
              {user?.name}
            </h1>
            <p className="opacity-90">{user?.email}</p>

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

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">

        {/* 🔹 PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-lg">{user?.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-semibold text-lg">{user?.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
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

        {/* 🔹 AVATAR SELECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Choose Your Avatar
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                onClick={() => handleAvatarSelect(avatar)}
                className={`p-1 rounded-full cursor-pointer transition transform 
                  ${
                    selectedAvatar === avatar
                      ? "ring-4 ring-indigo-500 scale-110"
                      : "hover:scale-105"
                  }`}
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 QUICK ACTIONS (Professional Touch) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap gap-4 justify-center md:justify-start">

          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Edit Profile
          </button>

          <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Change Password
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;