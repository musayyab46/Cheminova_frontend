// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// const AdminLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 flex">

//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Desktop Sidebar */}
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full z-50
//           transform transition-transform duration-300
//           md:hidden
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0">

//         {/* Mobile Top Bar */}
//         <div className="md:hidden bg-white p-4 shadow flex items-center justify-between">

//           <button
//             onClick={() =>
//               setSidebarOpen(!sidebarOpen)
//             }
//           >
//             {sidebarOpen ? (
//               <X size={26} />
//             ) : (
//               <Menu size={26} />
//             )}
//           </button>

//           <h1 className="font-bold text-lg">
//             Admin Panel
//           </h1>

//           <div />
//         </div>

//         <Navbar />

//         <main className="flex-1 p-3 md:p-6 overflow-x-hidden">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );
// };


// export default AdminLayout;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="flex min-h-full bg-gray-100">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-50 md:hidden
        transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        <div className="md:hidden bg-white p-4 shadow flex justify-between">

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
          >
            {sidebarOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

          <h1 className="font-bold">
            Admin Panel
          </h1>

          <div />
        </div>

        <Navbar />

        <main className="flex-1 p-4 md:p-6 overflow-hidden">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;