// src/pages/AboutUs.jsx
import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us bg-gray-50 py-10 pt-24">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
            About Zambia Institute of Planners
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700 mb-10 animate__animated animate__fadeIn animate__delay-1s">
            The Zambia Institute of Planners (here in after referred to as
            “ZIP”) is a Statutory Body constituted under the Urban and Regional
            Planners Act No. 4 of 2011 of the Laws of Zambia. We promote
            integrated development planning by advocating sustainable planning,
            policy development, and providing a platform for continuous
            professional development.
          </p>

          {/* Mission & Vision Section */}
          <section className="mission-vision grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 py-10 animate__animated animate__fadeIn animate__delay-2s">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Mission
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                To achieve professional self-regulation and regulate planning
                practice in the public interest through continuous professional
                development of our members.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Vision
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                To become the best planning professional body with a coherent
                organizational and professional platform for the advancement of
                all planners and the creation of quality liveable places in a
                timely and cost effective manner.
              </p>
            </div>
          </section>

          {/* Functions of ZIP Section */}
          <section className="functions py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
              Functions of ZIP
            </h3>
            <ul className="space-y-4 text-lg md:text-xl text-gray-600 list-inside">
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Promote spatial, aesthetic, economic, and social development.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Register planners and planning firms and regulate their
                professional conduct.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Develop and promote international standards for planning
                practice in Zambia.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Advise the government on matters relating to the planning
                profession.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Raise the character and status of planners to increase community
                confidence in the profession.
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Provide a forum for the communication and interchange of views
                on matters relating to planning and disseminate these views to
                the public
              </li>
              <li className="transform hover:translate-x-2 transition duration-300 ease-in-out hover:text-indigo-600">
                Do all other incidental, or conducive things necessary for the
                attainment of the functions of the Institute under the Act
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
