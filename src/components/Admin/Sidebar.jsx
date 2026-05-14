import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Route,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      title: "Generated Paths",
      path: "/admin/generated-paths",
      icon: Route,
    },
  ];

  return (
    <aside
      className="
  w-64
  min-h-screen
  h-full
  bg-black
  text-white
  p-6
  flex
  flex-col
  shadow-xl
  overflow-y-auto
    "
    >
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Management System
        </p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              duration-300

              ${
                active
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-gray-800 text-gray-300"
              }
            `}
            >
              <Icon size={20}/>
              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          Cheminova Admin
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;