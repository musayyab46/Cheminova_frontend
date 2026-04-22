import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ArrowRight,
  User,
  LogOut,
  BookOpen,
  Info,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔐 Logout Function
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user"); // optional

    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    {
      name: "Generate Career Path",
      path: "/generatePath",
      icon: <ArrowRight size={20} />,
    },
    { name: "Courses", path: "/courses", icon: <BookOpen size={20} /> },
    { name: "About Us", path: "/about", icon: <Info size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
    { name: "Features", path: "/features", icon: <Sparkles size={20} /> },

    // 🔴 Logout as action (not route)
    {
      name: "Logout",
      icon: <LogOut size={20} />,
      danger: true,
      action: "logout",
    },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 shadow">
        <h1 className="font-semibold text-lg text-blue-500">Cheminova</h1>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-center bg-white text-blue-500 font-bold text-xl shadow-md">
          {/* Mobile */}
          <span className="md:hidden font-bold text-xl text-blue-500">
            Menu
          </span>

          {/* Desktop */}
          <span className="hidden md:block font-bold text-xl text-blue-600">
            Cheminova
          </span>

          <button className="md:hidden ml-20" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-2">
          {menuItems.map((item) => {
            // 🔴 LOGOUT BUTTON
            if (item.action === "logout") {
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="
                    flex items-center gap-3 w-full px-4 py-2 rounded-xl cursor-pointer
                    text-red-600 hover:bg-red-100 hover:text-red-700
                  "
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              );
            }

            // ✅ NORMAL ROUTES
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 w-full px-4 py-2 rounded-xl transition
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}