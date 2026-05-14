// import { motion, AnimatePresence } from "framer-motion";
// import API from "../../services/api";
// import {
//   X,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const AuthModal = ({
//   open,
//   setOpen,
//   isLogin,
//   setIsLogin,
// }) => {
//   const navigate = useNavigate();

//   // =========================
//   // STATES
//   // =========================
//   const [loading, setLoading] = useState(false);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//     age: "",
//   });

//   // =========================
//   // CLOSE MODAL
//   // =========================
//   const closeModal = () => {
//     setOpen(false);
//     navigate("/");
//   };

//   // =========================
//   // LOGIN HANDLER
//   // =========================
//   const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     setLoading(true);

//     const response = await API.post("/auth/login", loginData);

//     console.log(response.data);

//     const { token, role } = response.data;

//     // STORE TOKEN
//     localStorage.setItem("token", token);

//     // STORE ROLE (normalize for safety)
//     localStorage.setItem("role", role);

//     // STORE USER (FIXED)
//     localStorage.setItem(
//       "user",
//       JSON.stringify({ email: loginData.email, role })
//     );

//     // CLOSE MODAL
//     setOpen(false);

//     // ROLE BASED REDIRECT
//     const normalizedRole = role?.toLowerCase();

//     if (normalizedRole === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/dashboard");
//     }

//   } catch (error) {
//     console.log(error);

//     alert(
//       error?.response?.data?.message || "Login failed"
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   // =========================
//   // SIGNUP HANDLER
//   // =========================
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const response = await API.post("/auth/register", {
//         ...signupData,
//         age: Number(signupData.age), // convert to number
//       });

//       console.log(response.data);

//       alert("Signup successful");

//       // SWITCH TO LOGIN
//       setIsLogin(true);
//     } catch (error) {
//       console.log(error);

//       alert(
//         error?.response?.data?.message ||
//           "Signup failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="
//           fixed inset-0
//           z-[999]

//           flex items-center justify-center

//           bg-black/60
//           backdrop-blur-sm

//           px-3 sm:px-4
//           py-4
//           "
//         >
//           {/* MODAL CARD */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//               y: 40,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.9,
//               y: 40,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className={`
//             relative

//             w-full
//             ${
//               isLogin
//                 ? "max-w-md overflow-hidden"
//                 : "max-w-2xl max-h-[92vh] overflow-y-auto"
//             }

//             rounded-3xl
//             border border-white/10

//             bg-[#0F172A]/95
//             backdrop-blur-xl

//             p-5 sm:p-8

//             shadow-2xl
//             `}
//           >
//             {/* GLOW EFFECTS */}
//             <div
//               className="
//               absolute
//               -left-10 top-0

//               w-40 h-40

//               bg-purple-600/20
//               blur-3xl
//               rounded-full
//               "
//             />

//             <div
//               className="
//               absolute
//               -bottom-10 right-0

//               w-40 h-40

//               bg-indigo-600/20
//               blur-3xl
//               rounded-full
//               "
//             />

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={closeModal}
//               className="
//               absolute
//               top-4 right-4

//               z-50

//               w-10 h-10

//               rounded-xl

//               bg-white/5
//               border border-white/10

//               flex items-center justify-center

//               text-gray-400
//               hover:text-white
//               hover:bg-white/10

//               transition-all duration-300
//               "
//             >
//               <X size={18} />
//             </button>

//             {/* HEADER */}
//             <div className="relative text-center">
//               <h2
//                 className="
//                 text-2xl sm:text-3xl
//                 font-bold
//                 text-white
//                 "
//               >
//                 {isLogin
//                   ? "Welcome Back"
//                   : "Create Account"}
//               </h2>

//               <p
//                 className="
//                 mt-3
//                 text-sm sm:text-base
//                 text-gray-400
//                 "
//               >
//                 {isLogin
//                   ? "Login to continue your learning journey"
//                   : "Start building your personalized roadmap"}
//               </p>
//             </div>

//             {/* LOGIN FORM */}
//             {isLogin ? (
//               <form
//                 onSubmit={handleLogin}
//                 className="relative mt-8 space-y-5"
//               >
//                 {/* EMAIL */}
//                 <div>
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Email Address
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <Mail
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <input
//                       type="email"
//                       required
//                       value={loginData.email}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           email: e.target.value,
//                         })
//                       }
//                       placeholder="Enter your email"
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none

//                       text-white
//                       placeholder:text-gray-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* PASSWORD */}
//                 <div>
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Password
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <Lock
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <input
//                       type="password"
//                       required
//                       value={loginData.password}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           password: e.target.value,
//                         })
//                       }
//                       placeholder="Enter your password"
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none

//                       text-white
//                       placeholder:text-gray-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* LOGIN BUTTON */}
//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   type="submit"
//                   disabled={loading}
//                   className="
//                   group

//                   w-full

//                   flex items-center justify-center gap-2

//                   rounded-2xl

//                   bg-gradient-to-r
//                   from-purple-600
//                   to-indigo-600

//                   px-5 py-4

//                   font-semibold
//                   text-white

//                   shadow-lg shadow-purple-900/30
//                   "
//                 >
//                   {loading
//                     ? "Logging in..."
//                     : "Login"}

//                   <ArrowRight
//                     size={18}
//                     className="
//                     group-hover:translate-x-1
//                     transition
//                     "
//                   />
//                 </motion.button>
//               </form>
//             ) : (
//               // SIGNUP FORM
//               <form
//                 onSubmit={handleSignup}
//                 className="
//                 relative
//                 mt-8

//                 grid
//                 grid-cols-1 md:grid-cols-2
//                 gap-5
//                 "
//               >
//                 {/* FULL NAME */}
//                 <InputField
//                   label="Full Name"
//                   icon={User}
//                   type="text"
//                   placeholder="Enter your name"
//                   value={signupData.name}
//                   onChange={(e) =>
//                     setSignupData({
//                       ...signupData,
//                       name: e.target.value,
//                     })
//                   }
//                 />

//                 {/* EMAIL */}
//                 <InputField
//                   label="Email"
//                   icon={Mail}
//                   type="email"
//                   placeholder="Enter your email"
//                   value={signupData.email}
//                   onChange={(e) =>
//                     setSignupData({
//                       ...signupData,
//                       email: e.target.value,
//                     })
//                   }
//                 />

//                 {/* PASSWORD */}
//                 <InputField
//                   label="Password"
//                   icon={Lock}
//                   type="password"
//                   placeholder="Enter password"
//                   value={signupData.password}
//                   onChange={(e) =>
//                     setSignupData({
//                       ...signupData,
//                       password: e.target.value,
//                     })
//                   }
//                 />

//                 {/* ROLE */}
//                 <div>
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Role
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <ShieldCheck
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <select
//                       value={signupData.role}
//                       onChange={(e) =>
//                         setSignupData({
//                           ...signupData,
//                           role: e.target.value,
//                         })
//                       }
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none
//                       text-white
//                       "
//                     >
//                       <option
//                         value="USER"
//                         className="bg-[#0F172A]"
//                       >
//                         USER
//                       </option>

                     
//                     </select>
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <InputField
//                   label="Phone"
//                   icon={Phone}
//                   type="text"
//                   placeholder="+91 9876543210"
//                   value={signupData.phone}
//                   onChange={(e) =>
//                     setSignupData({
//                       ...signupData,
//                       phone: e.target.value,
//                     })
//                   }
//                 />

//                 {/* AGE */}
//                 <InputField
//                   label="Age"
//                   icon={User}
//                   type="number"
//                   placeholder="Enter your age"
//                   value={signupData.age}
//                   onChange={(e) =>
//                     setSignupData({
//                       ...signupData,
//                       age: e.target.value,
//                     })
//                   }
//                 />

//                 {/* ADDRESS */}
//                 <div className="md:col-span-2">
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Address
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <MapPin
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <input
//                       type="text"
//                       placeholder="Enter your address"
//                       value={signupData.address}
//                       onChange={(e) =>
//                         setSignupData({
//                           ...signupData,
//                           address: e.target.value,
//                         })
//                       }
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none

//                       text-white
//                       placeholder:text-gray-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* BUTTON */}
//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   type="submit"
//                   disabled={loading}
//                   className="
//                   group

//                   md:col-span-2

//                   w-full

//                   flex items-center justify-center gap-2

//                   rounded-2xl

//                   bg-gradient-to-r
//                   from-purple-600
//                   to-indigo-600

//                   px-5 py-4

//                   font-semibold
//                   text-white

//                   shadow-lg shadow-purple-900/30
//                   "
//                 >
//                   {loading
//                     ? "Creating Account..."
//                     : "Create Account"}

//                   <ArrowRight
//                     size={18}
//                     className="
//                     group-hover:translate-x-1
//                     transition
//                     "
//                   />
//                 </motion.button>
//               </form>
//             )}

//             {/* TOGGLE */}
//             <div className="relative mt-6 text-center">
//               <p className="text-gray-400 text-sm sm:text-base">
//                 {isLogin
//                   ? "Don't have an account?"
//                   : "Already have an account?"}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsLogin(!isLogin)
//                   }
//                   className="
//                   ml-2

//                   text-purple-400
//                   hover:text-purple-300

//                   font-medium
//                   transition
//                   "
//                 >
//                   {isLogin
//                     ? "Signup"
//                     : "Login"}
//                 </button>
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // =========================
// // REUSABLE INPUT
// // =========================
// const InputField = ({
//   label,
//   icon: Icon,
//   type,
//   placeholder,
//   value,
//   onChange,
// }) => {
//   return (
//     <div>
//       <label className="block mb-2 text-sm text-gray-300">
//         {label}
//       </label>

//       <div
//         className="
//         flex items-center gap-3

//         rounded-2xl
//         border border-white/10

//         bg-white/5

//         px-4 py-3
//         "
//       >
//         <Icon
//           size={18}
//           className="text-gray-400"
//         />

//         <input
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           required
//           className="
//           w-full
//           bg-transparent
//           outline-none

//           text-white
//           placeholder:text-gray-500
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default AuthModal;




import { motion, AnimatePresence } from "framer-motion";
import API from "../../services/api";
import {
  X,
  Mail,
  Lock,
  User,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthModal = ({
  open,
  setOpen,
  isLogin,
  setIsLogin,
}) => {
  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    age: "",
  });

  const [showOtp, setShowOtp] = useState(false);

const [otpData, setOtpData] = useState({
  email: "",
  otp: "",
});

  // =========================
  // CLOSE MODAL
  // =========================
  const closeModal = () => {
    setOpen(false);
    navigate("/");
  };

  // =========================
  // LOGIN HANDLER
  // =========================
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await API.post("/auth/login", loginData);

    console.log(response.data);

    const { token, role } = response.data;

    // STORE TOKEN
    localStorage.setItem("token", token);

    // STORE ROLE (normalize for safety)
    localStorage.setItem("role", role);

    // STORE USER (FIXED)
    localStorage.setItem(
      "user",
      JSON.stringify({ email: loginData.email, role })
    );

    // CLOSE MODAL
    setOpen(false);

    // ROLE BASED REDIRECT
    const normalizedRole = role?.toLowerCase();

    if (normalizedRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    console.log(error);

    alert(
      error?.response?.data?.message || "Login failed"
    );
  } finally {
    setLoading(false);
  }
};

  // =========================
  // SIGNUP HANDLER
  // =========================
  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const payload = {
  name: signupData.name.trim(),
  email: signupData.email.trim(),
  password: signupData.password,
  phone: signupData.phone.trim(),
  address: signupData.address.trim(),
  age: Number(signupData.age || 0),
};

    await API.post("/auth/register",payload);

    // keep email for verify API
    setOtpData({
      email: signupData.email,
      otp: "",
    });

    // switch signup → otp card
    setShowOtp(true);

  } catch (error) {
    console.log(error);

    alert(
      error?.response?.data?.message ||
      "Signup failed"
    );
  } finally {
    setLoading(false);
  }
};

const handleVerifyOTP = async () => {
  try {
    setLoading(true);

    await API.post(
      "/auth/verify-otp",
      otpData
    );

    alert(
      "Email verified successfully"
    );

    setShowOtp(false);
    setIsLogin(true);

  } catch (error) {
    alert(
      error?.response?.data?.message ||
      "Invalid OTP"
    );
  } finally {
    setLoading(false);
  }
};

const handleResendOTP = async () => {
  try {
    await API.post(
      "/auth/resend-otp",
      {
        email: otpData.email,
      }
    );

    alert("OTP resent");

  } catch (error) {
    alert(
      error?.response?.data?.message ||
      "Failed to resend OTP"
    );
  }
};

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed inset-0
          z-[999]

          flex items-center justify-center

          bg-black/60
          backdrop-blur-sm

          px-3 sm:px-4
          py-4
          "
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
            relative

            w-full
            ${
              isLogin
                ? "max-w-md overflow-hidden"
                : "max-w-2xl max-h-[92vh] overflow-y-auto"
            }

            rounded-3xl
            border border-white/10

            bg-[#0F172A]/95
            backdrop-blur-xl

            p-5 sm:p-8

            shadow-2xl
            `}
          >
            {/* GLOW EFFECTS */}
            <div
              className="
              absolute
              -left-10 top-0

              w-40 h-40

              bg-purple-600/20
              blur-3xl
              rounded-full
              "
            />

            <div
              className="
              absolute
              -bottom-10 right-0

              w-40 h-40

              bg-indigo-600/20
              blur-3xl
              rounded-full
              "
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
              absolute
              top-4 right-4

              z-50

              w-10 h-10

              rounded-xl

              bg-white/5
              border border-white/10

              flex items-center justify-center

              text-gray-400
              hover:text-white
              hover:bg-white/10

              transition-all duration-300
              "
            >
              <X size={18} />
            </button>

            {/* HEADER */}
            <div className="relative text-center">
              <h2
                className="
                text-2xl sm:text-3xl
                font-bold
                text-white
                "
              >
                {isLogin
                  ? "Welcome Back"
                  : "Create Account"}
              </h2>

              <p
                className="
                mt-3
                text-sm sm:text-base
                text-gray-400
                "
              >
                {isLogin
                  ? "Login to continue your learning journey"
                  : "Start building your personalized roadmap"}
              </p>
            </div>

            {/* LOGIN FORM */}
            {showOtp ? (
  <div className="relative mt-8 space-y-5">

    <h3 className="text-center text-white text-xl font-semibold">
      Verify Email
    </h3>

    <p className="text-center text-gray-400 text-sm">
      Enter OTP sent to
      <span className="text-purple-400 ml-1">
        {otpData.email}
      </span>
    </p>

    <div
      className="
      flex items-center gap-3
      rounded-2xl
      border border-white/10
      bg-white/5
      px-4 py-3
      "
    >
      <ShieldCheck
        size={18}
        className="text-gray-400"
      />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otpData.otp}
        onChange={(e) =>
          setOtpData({
            ...otpData,
            otp: e.target.value,
          })
        }
        className="
        w-full
        bg-transparent
        outline-none
        text-white
        placeholder:text-gray-500
        "
      />
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type="button"
      onClick={handleVerifyOTP}
      disabled={loading}
      className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-purple-600
      to-indigo-600
      py-4
      text-white
      font-semibold
      "
    >
      {loading
        ? "Verifying..."
        : "Verify OTP"}
    </motion.button>

    <button
      type="button"
      onClick={handleResendOTP}
      className="
      w-full
      text-purple-400
      hover:text-purple-300
      transition
      "
    >
      Resend OTP
    </button>

  </div>

) : isLogin ? (

  <form
    onSubmit={handleLogin}
    className="relative mt-8 space-y-5"
  >

    <div>
      <label className="block mb-2 text-sm text-gray-300">
        Email Address
      </label>

      <div
        className="
        flex items-center gap-3
        rounded-2xl
        border border-white/10
        bg-white/5
        px-4 py-3
        "
      >
        <Mail
          size={18}
          className="text-gray-400"
        />

        <input
          type="email"
          required
          value={loginData.email}
          onChange={(e)=>
            setLoginData({
              ...loginData,
              email:e.target.value
            })
          }
          placeholder="Enter your email"
          className="
          w-full
          bg-transparent
          outline-none
          text-white
          placeholder:text-gray-500
          "
        />
      </div>
    </div>

    <div>
      <label className="block mb-2 text-sm text-gray-300">
        Password
      </label>

      <div
        className="
        flex items-center gap-3
        rounded-2xl
        border border-white/10
        bg-white/5
        px-4 py-3
        "
      >
        <Lock
          size={18}
          className="text-gray-400"
        />

        <input
          type="password"
          required
          value={loginData.password}
          onChange={(e)=>
            setLoginData({
              ...loginData,
              password:e.target.value
            })
          }
          placeholder="Enter password"
          className="
          w-full
          bg-transparent
          outline-none
          text-white
          placeholder:text-gray-500
          "
        />
      </div>
    </div>

    <motion.button
      whileHover={{ scale:1.02 }}
      whileTap={{ scale:0.97 }}
      type="submit"
      disabled={loading}
      className="
      group
      w-full
      flex items-center justify-center gap-2
      rounded-2xl
      bg-gradient-to-r
      from-purple-600
      to-indigo-600
      px-5 py-4
      font-semibold
      text-white
      "
    >
      {loading
        ? "Logging in..."
        : "Login"}

      <ArrowRight
        size={18}
        className="
        group-hover:translate-x-1
        transition
        "
      />
    </motion.button>

  </form>

            ) : (
              // SIGNUP FORM
              <form
                onSubmit={handleSignup}
                className="
                relative
                mt-8

                grid
                grid-cols-1 md:grid-cols-2
                gap-5
                "
              >
                {/* FULL NAME */}
                <InputField
                  label="Full Name"
                  icon={User}
                  type="text"
                  placeholder="Enter your name"
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      name: e.target.value,
                    })
                  }
                />

                {/* EMAIL */}
                <InputField
                  label="Email"
                  icon={Mail}
                  type="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      email: e.target.value,
                    })
                  }
                />

                {/* PASSWORD */}
                <InputField
                  label="Password"
                  icon={Lock}
                  type="password"
                  placeholder="Enter password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      password: e.target.value,
                    })
                  }
                />


                {/* PHONE */}
                <InputField
                  label="Phone"
                  icon={Phone}
                  type="text"
                  placeholder="+91 9876543210"
                  value={signupData.phone}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      phone: e.target.value,
                    })
                  }
                />

                {/* AGE */}
                <InputField
                  label="Age"
                  icon={User}
                  type="number"
                  placeholder="Enter your age"
                  value={signupData.age}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      age: e.target.value,
                    })
                  }
                />

                {/* ADDRESS */}
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm text-gray-300">
                    Address
                  </label>

                  <div
                    className="
                    flex items-center gap-3

                    rounded-2xl
                    border border-white/10

                    bg-white/5

                    px-4 py-3
                    "
                  >
                    <MapPin
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter your address"
                      value={signupData.address}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          address: e.target.value,
                        })
                      }
                      className="
                      w-full
                      bg-transparent
                      outline-none

                      text-white
                      placeholder:text-gray-500
                      "
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  disabled={loading}
                  className="
                  group

                  md:col-span-2

                  w-full

                  flex items-center justify-center gap-2

                  rounded-2xl

                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600

                  px-5 py-4

                  font-semibold
                  text-white

                  shadow-lg shadow-purple-900/30
                  "
                >
                  {loading
                    ? "Creating Account..."
                    : "Create Account"}

                  <ArrowRight
                    size={18}
                    className="
                    group-hover:translate-x-1
                    transition
                    "
                  />
                </motion.button>
              </form>
            )}

            {/* TOGGLE */}
            <div className="relative mt-6 text-center">
              <p className="text-gray-400 text-sm sm:text-base">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  onClick={() =>
                    setIsLogin(!isLogin)
                  }
                  className="
                  ml-2

                  text-purple-400
                  hover:text-purple-300

                  font-medium
                  transition
                  "
                >
                  {isLogin
                    ? "Signup"
                    : "Login"}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// =========================
// REUSABLE INPUT
// =========================
const InputField = ({
  label,
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-300">
        {label}
      </label>

      <div
        className="
        flex items-center gap-3

        rounded-2xl
        border border-white/10

        bg-white/5

        px-4 py-3
        "
      >
        <Icon
          size={18}
          className="text-gray-400"
        />

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="
          w-full
          bg-transparent
          outline-none

          text-white
          placeholder:text-gray-500
          "
        />
      </div>
    </div>
  );
};

export default AuthModal;


//  {isLogin ? (
//               <form
//                 onSubmit={handleLogin}
//                 className="relative mt-8 space-y-5"
//               >
//                 {/* EMAIL */}
//                 <div>
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Email Address
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <Mail
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <input
//                       type="email"
//                       required
//                       value={loginData.email}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           email: e.target.value,
//                         })
//                       }
//                       placeholder="Enter your email"
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none

//                       text-white
//                       placeholder:text-gray-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* PASSWORD */}
//                 <div>
//                   <label className="block mb-2 text-sm text-gray-300">
//                     Password
//                   </label>

//                   <div
//                     className="
//                     flex items-center gap-3

//                     rounded-2xl
//                     border border-white/10

//                     bg-white/5

//                     px-4 py-3
//                     "
//                   >
//                     <Lock
//                       size={18}
//                       className="text-gray-400"
//                     />

//                     <input
//                       type="password"
//                       required
//                       value={loginData.password}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           password: e.target.value,
//                         })
//                       }
//                       placeholder="Enter your password"
//                       className="
//                       w-full
//                       bg-transparent
//                       outline-none

//                       text-white
//                       placeholder:text-gray-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* LOGIN BUTTON */}
//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                   }}
//                   whileTap={{
//                     scale: 0.97,
//                   }}
//                   type="submit"
//                   disabled={loading}
//                   className="
//                   group

//                   w-full

//                   flex items-center justify-center gap-2

//                   rounded-2xl

//                   bg-gradient-to-r
//                   from-purple-600
//                   to-indigo-600

//                   px-5 py-4

//                   font-semibold
//                   text-white

//                   shadow-lg shadow-purple-900/30
//                   "
//                 >
//                   {loading
//                     ? "Logging in..."
//                     : "Login"}

//                   <ArrowRight
//                     size={18}
//                     className="
//                     group-hover:translate-x-1
//                     transition
//                     "
//                   />
//                 </motion.button>
//               </form> */}

