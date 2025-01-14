import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import img1 from "../assets/Banner2.jpg";
import img2 from "../assets/Banner1.jpg";
import img3 from "../assets/Banner3.jpg";
import event1 from "../assets/Event1.jpg";
import event2 from "../assets/Event2.jpg";
import event3 from "../assets/Event3.jpg";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="home-page bg-gray-400 pt-20">
        {/* Hero Section with Carousel */}
        <div
          className="hero-section bg-cover bg-center text-white py-20 px-6 text-center relative md:py-40"
          style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Welcome to the Zambia Institute of Planners
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Advancing Planning for a Livable Zambia
          </p>
          <Link
            to="/membership"
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-base md:text-lg transition duration-300 transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        {/* About Preview Section */}
        <section className="about-preview text-center py-12 md:py-16 bg-gray-100">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
            About Zambia Institute of Planners
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 px-4">
            The Zambia Institute of Planners (ZIP) is dedicated to enhancing the
            standards of urban and regional planning across Zambia.
          </p>
          <Link
            to="/about"
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-sm sm:text-base transition duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </section>

        {/* Benefits Preview Section */}
        <section className="benefits-preview py-12 md:py-16 bg-white">
          <h2 className="text-2xl sm:text-3xl text-center font-semibold mb-8 text-gray-800">
            Benefits of Membership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="benefit-card text-center p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <i className="fas fa-users fa-3x mb-4 text-blue-600"></i>
              <h4 className="text-xl font-semibold mb-2">Networking</h4>
              <p className="text-base text-gray-600">
                Connect with professionals in planning from across Zambia.
              </p>
            </div>
            <div className="benefit-card text-center p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <i className="fas fa-calendar-alt fa-3x mb-4 text-blue-600"></i>
              <h4 className="text-xl font-semibold mb-2">Events</h4>
              <p className="text-base text-gray-600">
                Participate in conferences, AGMs, and more.
              </p>
            </div>
            <div className="benefit-card text-center p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <i className="fas fa-chalkboard-teacher fa-3x mb-4 text-blue-600"></i>
              <h4 className="text-xl font-semibold mb-2">Mentorship</h4>
              <p className="text-base text-gray-600">
                Receive guidance from seasoned planning professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Events Teaser */}
        <section className="events-teaser py-12 md:py-16 bg-gray-100">
          <h2 className="text-2xl sm:text-3xl text-center font-semibold mb-8 text-gray-800">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={event1}
                alt="Event 1"
                className="w-full h-48 object-cover"
              />
              <div className="card-body p-4">
                <h5 className="text-lg sm:text-xl font-semibold mb-2">
                  Annual General Meeting
                </h5>
                <p className="text-base text-gray-600 mb-4">
                  Join the Annual General Meeting that promotes planning among
                  registered professionals.
                </p>
                <Link
                  to="/events"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={event2}
                alt="Event 2"
                className="w-full h-48 object-cover"
              />
              <div className="card-body p-4">
                <h5 className="text-lg sm:text-xl font-semibold mb-2">
                  National Planning Conference
                </h5>
                <p className="text-base text-gray-600 mb-4">
                  An annual event promoting integrated development planning.
                </p>
                <Link
                  to="/events"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={event3}
                alt="Event 3"
                className="w-full h-48 object-cover"
              />
              <div className="card-body p-4">
                <h5 className="text-lg sm:text-xl font-semibold mb-2">
                  Networking Gala
                </h5>
                <p className="text-base text-gray-600 mb-4">
                  Connect with other planners and leaders in the industry.
                </p>
                <Link
                  to="/events"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
