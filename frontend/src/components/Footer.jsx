import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        {/* Contact Information */}
        <p className="text-lg font-semibold mb-2">
          Zambia Institute of Planners - (ZIP)
        </p>
        <p className="text-sm mb-4">Contact us:</p>
        <p className="text-sm">
          Email:{" "}
          <a
            href="mailto:info@Zambiainstituteofplanners.org.zm "
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            info@Zambiainstituteofplanners.org.zm
          </a>
        </p>
        <p className="text-sm mb-4">Phone: +260773992358</p>
        <p className="text-sm mb-4">
          Website:{" "}
          <a
            href="http://www.zambiainstituteofplanners.org.zm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            www.zambiainstituteofplanners.org.zm
          </a>
        </p>

        {/* Social Icons */}
        <div className="social-icons mt-4 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/ZambiaInstituteofPlanners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/zambiaplanners/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
          >
            <i className="fab fa-linkedin-square fa-2x"></i>
          </a>
          {/* Chnage the whatsapp message here later */}
          <a
            href="https://wa.me/260773992358?text=Hello%20Zambia%20Institute%20of%20Planners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm">All rights reserved &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
