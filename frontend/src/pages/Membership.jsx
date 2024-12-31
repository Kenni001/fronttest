import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-2xl leading-6 font-medium text-gray-900">{title}</h3>
          <div className="mt-2 px-7 py-3">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Membership Details:</h4>
            <p className="text-lg text-gray-500">{content}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Membership Component
const Membership = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);

  const membershipTypes = [
    {
      title: "Spatial Planning",
      description: "Members with expertise in spatial planning, land use planning, and urban design.",
      details: "Change Accordingly."
    },
    {
      title: "Socio-economic Planning",
      description: "Members with expertise in social development and economic planning.",
      details: "Change Accordingly."
    },
    {
      title: "Environmental Planning",
      description: "Members with expertise in environmental planning, management and climate change.",
      details: "Change Accordingly."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="membership bg-gray-50 py-10 pt-20">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
            Membership Categories
          </h1>

          {/* Membership Types Section */}
          <section className="membership-types grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {membershipTypes.map((type, index) => (
              <div 
                key={index}
                className="card p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {type.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {type.description}
                </p>
                <button
                  onClick={() => setSelectedMembership(type)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-300 ease-in-out"
                >
                  See More
                </button>
              </div>
            ))}
          </section>

          {/* Modal for displaying membership details */}
          <Modal
            isOpen={!!selectedMembership}
            onClose={() => setSelectedMembership(null)}
            title={selectedMembership?.title}
            content={selectedMembership?.details}
          />

          {/* Membership Benefits Section */}
          <section className="membership-benefits py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Why Join ZIP?
            </h2>
            <p className="text-center text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
              As a member of the Zambia Institute of Planners, you gain access
              to:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Networking opportunities with professionals in the field.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Access to exclusive training and development programs.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Participation in conferences and events across Zambia and
                internationally.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Continuous professional development and mentoring.
              </li>
            </ul>
            <p className="text-center mt-6 animate__animated animate__fadeIn animate__delay-2s">
              To join ZIP, please{" "}
              <Link to="/register" className="btn btn-primary text-white bg-indigo-600 py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-300">
                Register Now
              </Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Membership;

