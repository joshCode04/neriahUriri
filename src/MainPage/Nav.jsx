import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#161616] px-[20px] py-[30px] montserrat md:px-[130px]">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800 fonti">
          NerrysDesign
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4 text-[#FFFFFF] font-medium">
          <Link to="/profile" className="px-2 py-1 hover:underline">
            Portfolio
          </Link>

          <Link to="/about" className="px-2 py-1 hover:underline">
            About
          </Link>
          <Link to="/contact" className="px-2 py-1 hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div
          className="md:hidden text-[#FFFFFF] cursor-pointer text-3xl"
          onClick={toggleSidebar}
        >
          ☰
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1e1e1e] border-l-2 border-[#3e3e3e] text-[#FFFFFF] w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-3xl font-bold text-[#FFFFFF]"
          >
            ✖
          </button>
        </div>

        {/* Sidebar links */}
        <div className="flex flex-col items-start p-6 space-y-4">
          <Link
            to="/profile"
            className="px-2 py-1 hover:underline"
            onClick={toggleSidebar}
          >
            Portfolio
          </Link>

          <Link
            to="/about"
            className="px-2 py-1 hover:underline"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-2 py-1 hover:underline"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
