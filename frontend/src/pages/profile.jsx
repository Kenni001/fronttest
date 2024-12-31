import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    maidenName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    membershipType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return navigate("/login");
        }

        const response = await axios.get(
          "https://fronttest-taupe.vercel.app/api/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(response.data);
        setFormData({
          firstName: response.data.firstName || "",
          middleName: response.data.middleName || "",
          lastName: response.data.lastName || "",
          maidenName: response.data.maidenName || "",
          email: response.data.email || "",
          username: response.data.username || "",
          phone: response.data.phone || "",
          address: response.data.address || "",
          city: response.data.city || "",
          state: response.data.state || "",
          membershipType: response.data.membershipType || "",
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "https://fronttest-taupe.vercel.app/api/auth/profile",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <LoggedInNavbar />
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
            Your Profile
          </h1>
          <div className="space-y-6">
            {editing ? (
              <form onSubmit={handleSaveChanges} className="grid gap-4">
                {Object.entries(formData).map(([key, value]) => {
                  if (key === "state") {
                    return (
                      <div key={key}>
                        <label className="block font-medium text-gray-700 capitalize">
                          State
                        </label>
                        <select
                          name="state"
                          value={value}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    );
                  } else if (key === "membershipType") {
                    return (
                      <div key={key}>
                        <label className="block font-medium text-gray-700 capitalize">
                          Membership Type
                        </label>
                        <select
                          name="membershipType"
                          value={value}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select Membership Type</option>
                          <option value="I">I</option>
                          <option value="II">II</option>
                          <option value="III">III</option>
                        </select>
                      </div>
                    );
                  } else {
                    return (
                      <div key={key}>
                        <label className="block font-medium text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type={key === "email" ? "email" : "text"}
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required={[
                            "firstName",
                            "lastName",
                            "email",
                            "username",
                          ].includes(key)}
                        />
                      </div>
                    );
                  }
                })}
                <div className="flex justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-gray-800">
                {Object.entries(formData).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
                    {value || "Not Provided"}
                  </p>
                ))}
                <p>
                  <strong>Membership Status:</strong> {user.membershipStatus}
                </p>
                <p>
                  <strong>Planner ID:</strong> {user.plannerId}
                </p>
                <div className="text-center mt-6">
                  <button
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setEditing(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
