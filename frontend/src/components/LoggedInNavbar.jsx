import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Assuming this is the path for the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Logout (clear token and redirect to login)
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="ZIP Logo"
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <span className="text-lg sm:text-xl font-bold text-white hover:text-gray-200 transform transition-all duration-300 ease-in-out hover:scale-110">
            Źambia 𝓘nstitute of 𝓟lanners
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/dashboard"
            className="text-sm sm:text-lg font-semibold hover:text-blue-200"
          >
            Dashboard
          </Link>
          <Link
            to="/memo"
            className="text-sm sm:text-lg font-semibold hover:text-blue-200"
          >
            Memos
          </Link>
          <Link
            to="/payment-form"
            className="text-sm sm:text-lg font-semibold hover:text-blue-200"
          >
            Make Payment
          </Link>
          <Link
            to="/membership-validation"
            className="text-sm sm:text-lg font-semibold hover:text-blue-200"
          >
            Membership Validation
          </Link>
          <Link
            to="/profile"
            className="text-sm sm:text-lg font-semibold hover:text-blue-200"
          >
            Profile
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Right Side - Profile and Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            type="button"
            onClick={handleLogout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:text-blue-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-blue-800 bg-opacity-80 shadow-md transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/memo"
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Memos
            </Link>
            <Link
              to="/payment-form"
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Make Payment
            </Link>
            <Link
              to="/membership-validation"
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership Validation
            </Link>
            <Link
              to="/profile"
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 focus:outline-none bg-red-600 px-6 py-2 rounded-full"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
