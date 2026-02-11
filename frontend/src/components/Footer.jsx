import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Cheminova
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              A modern learning & analytics platform built to help users
              grow faster with structured courses and insights.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a className="text-gray-300 hover:text-blue-400 transition">
                <FaFacebookF size={18} />
              </a>
              <a className="text-gray-300 hover:text-blue-400 transition">
                <FaXTwitter size={18} />
              </a>
              <a className="text-gray-300 hover:text-blue-400 transition">
                <FaLinkedinIn size={18} />
              </a>
              <a className="text-gray-300 hover:text-blue-400 transition">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Dashboard</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Analytics</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Cheminova. All rights reserved.
          </p>

          <div className="flex items-center gap-2 hover:text-white transition">
            <Mail size={16} />
            <span>support@cheminova.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
