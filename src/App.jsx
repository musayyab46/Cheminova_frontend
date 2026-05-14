// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect,useState} from "react";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Courses from "./pages/Courses";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Pathgenerator from "./pages/Pathgenerator";
// import Features from "./pages/Features";
// import Footer from "./components/Footer";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// //overscroll stop when side opened so that


// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [sidebarOpen]);

//   return (
//     <BrowserRouter>
//       <div className="min-h-screen overscroll-none">
//         <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//         {/* Right side container */}
//         <div className="flex flex-col flex-1 md:ml-64">
          
//           <main className="p-6 flex-1">
//             <Routes>
//               {/* public routes */}
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignupPage />} />

//             {/*  */}
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/features" element={<Features />} />
//               <Route path="/generatePath" element={<Pathgenerator/>}/>
//             </Routes>
//           </main>

//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Pathgenerator from "./pages/Pathgenerator";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Generatedpath from "./pages/Generatedpath";
import WelcomePage from "./pages/WelcomePage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import GeneratedPaths from "./pages/Admin/GeneratedPaths";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // hide sidebar/footer on auth pages
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";


    const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen overscroll-none">
      
      {!isAuthPage && !isAdminRoute &&(
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      )}

      <div className={`flex flex-col flex-1 ${ !isAuthPage && !isAdminRoute? "md:ml-64" : ""}`}>
        
        <main className="p-6 flex-1">
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />

            {/* PROTECTED ROUTES */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/courses"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <Courses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/features"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <Features />
                </ProtectedRoute>
              }
            />

            <Route
              path="/generatePath"
              element={
                <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                  <Pathgenerator />
                </ProtectedRoute>
              }

            />
            <Route
            path="/generatedPath"
            element={
              <ProtectedRoute allowedRoles={["ADMIN","USER"]}>
                <Generatedpath/>
              </ProtectedRoute>
            }
            />

            {/* ADMIN ROUTES */}
<Route
  path="/admin"
  element={
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="users" element={<Users />} />
  <Route path="generated-paths" element={<GeneratedPaths />} />
</Route>

          </Routes>
        </main>

        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
