import { useState } from "react";
import {NavLink} from "react-router-dom";
import { Menu, X, Home,ArrowRight, User,LogOut,BookOpen,Info,Sparkles } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path:"/",icon: <Home size={20} /> },
    {name:"Generate Career Path",path:"/generatePath",icon:<ArrowRight size={20}/>},
    { name:"Courses",path:"/courses",icon:<BookOpen size={20}/>},
    {name:"About Us",path:"/about",icon:<Info size={20}/>},
    { name: "Profile",path:"/profile" ,icon: <User size={20} /> },
    {name:"Features",path:"/features",icon:<Sparkles size={20}/>},
    {
    name: "Logout",
    path: "/logout",
    icon: <LogOut size={20} />,
    danger: true,
  },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 shadow">
        <h1 className="font-semibold text-lg text-blue-500 ">Cheminova</h1>
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
        <div className="h-16 flex items-center justify-center bg-white text-blue-500 font-bold text-xl shadow-md">
          {/* Mobile content */}
          <span className="md:hidden font-bold text-xl text-blue-500">
            Menu
          </span>

           {/* Desktop content */}
           <span className="hidden md:block font-bold text-xl text-blue-600">
            Cheminova
            </span>

          <button className="md:hidden ml-21" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <nav className="p-3 space-y-2">
          {menuItems.map((item) => (
            // <NavLink
            //   key={item.name}
            //   className="flex items-center gap-3 w-full px-4 py-2 rounded-xl text-gray-700 transition
            //   hover:bg-blue-100 hover:text-blue-700"
            // >
            //   {item.icon}
            //   <span>{item.name}</span>
            // </NavLink>
            <NavLink
  key={item.name}
  to={item.path}
  onClick={() => setOpen(false)}
  className={({ isActive }) => {
    if (item.danger) {
      return `
        flex items-center gap-3 w-full px-4 py-2 rounded-xl transition
        text-red-600 hover:bg-red-100 hover:text-red-700
      `;
    }

    return `
      flex items-center gap-3 w-full px-4 py-2 rounded-xl transition
      ${
        isActive
          ? "bg-blue-100 text-blue-700"
          : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
      }
    `;
  }}
>
  {item.icon}
  <span>{item.name}</span>
</NavLink>

          ))}
        </nav>
      </aside>
    </>
  );
}
