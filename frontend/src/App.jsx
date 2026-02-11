import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState} from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Pathgenerator from "./pages/Pathgenerator";
import Features from "./pages/Features";
import Footer from "./components/Footer";
//overscroll stop when side opened so that


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <BrowserRouter>
      <div className="min-h-screen overscroll-none">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* Right side container */}
        <div className="flex flex-col flex-1 md:ml-64">
          
          <main className="p-6 flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/features" element={<Features />} />
              <Route path="/generatePath" element={<Pathgenerator/>}/>
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
