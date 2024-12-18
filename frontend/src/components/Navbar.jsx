import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Assuming this is the path for the logo

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [timer, setTimer] = useState(null);

  const toggleDropdown = () => {
    if (dropdownOpen) {
      clearTimeout(timer);
    }
    setDropdownOpen((prevState) => !prevState);

    if (!dropdownOpen) {
      const newTimer = setTimeout(() => {
        setDropdownOpen(false);
      }, 2000);
      setTimer(newTimer);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState); // Toggle mobile menu state
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-blue-800 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="ZIP Logo" className="h-16 w-16" />
          <span className="text-2xl font-bold text-white hover:text-gray-200 transform transition-all duration-300 ease-in-out hover:scale-110">
            Źambia 𝓘nstitute of 𝓟lanners
          </span>
        </Link>

        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu} // Toggle mobile menu on click
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            About Us
          </Link>
          <Link
            to="/membership"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Membership
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Contact
          </Link>
          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="text-white text-md font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 focus:outline-none bg-blue-600 px-6 py-2 rounded-full"
              onClick={toggleDropdown}
            >
              Login
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl transition-all duration-200">
                <div className="py-2">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Member Login
                  </Link>
                  <Link
                    to="/admin/login"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Admin Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && ( // Conditionally render the mobile menu
        <div className="lg:hidden absolute top-20 left-0 w-full bg-blue-800 bg-opacity-80 shadow-md transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                About Us
              </Link>
              <Link
                to="/membership"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Membership
              </Link>
              <Link
                to="/contact"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Contact
              </Link>
              <div className="relative">
                <button
                  className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 focus:outline-none bg-blue-600 px-6 py-2 rounded-full"
                  onClick={toggleDropdown}
                >
                  Login
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-0 w-48 bg-blue-800 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-lg text-white hover:bg-blue-600 hover:text-gray-100 rounded"
                      >
                        Member Login
                      </Link>
                      <Link
                        to="/admin/login"
                        className="block px-4 py-2 text-lg text-white hover:bg-blue-600 hover:text-gray-100 rounded"
                      >
                        Admin Login
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
