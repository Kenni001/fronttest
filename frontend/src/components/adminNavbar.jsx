import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Assuming this is the path for the logo

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isMemoDropdownOpen, setIsMemoDropdownOpen] = useState(false);

  // Handle Logout (clear token and redirect to login)
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Toggle the Memo Dropdown
  const toggleMemoDropdown = () => {
    setIsMemoDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-blue-600 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="ZIP Logo" className="h-16 w-16" />
          <span className="text-xl font-bold text-white hover:text-gray-200 transform transition-all duration-300 ease-in-out hover:scale-110">
            Zambia Institute of Planners
          </span>
        </div>

        {/* Left Links - Hide on small screens, show in desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/admin/dashboard"
            className="text-lg font-semibold hover:text-blue-200"
          >
            Dashboard
          </Link>
          <Link
            to="/memo/create"
            className="text-lg font-semibold hover:text-blue-200"
          >
            Create Memo
          </Link>
          <Link
            to="/admin/members"
            className="text-lg font-semibold hover:text-blue-200"
          >
            Members
          </Link>
          <Link
            to="/generate-reports"
            className="text-lg font-semibold hover:text-blue-200"
          >
            Get Reports
          </Link>
        </div>

        {/* Right Profile Icon & Menu - Hide on small screens */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={handleLogout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:text-blue-200 hidden md:block"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMemoDropdown}
          className="md:hidden text-white focus:outline-none p-2 hover:bg-blue-500 rounded-lg transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMemoDropdownOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-blue-800 bg-opacity-80 shadow-md transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/admin/dashboard"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Dashboard
              </Link>
              <Link
                to="/memo/create"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Create Memo
              </Link>
              <Link
                to="/admin/members"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Members
              </Link>
              <Link
                to="/generate-reports"
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                Get Reports
              </Link>
              <button
                onClick={handleLogout}
                className="text-white text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 focus:outline-none bg-red-600 px-6 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
