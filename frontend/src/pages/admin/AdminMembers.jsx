import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/adminNavbar";

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(
        "https://fronttest-taupe.vercel.app/api/admin/members",
        {
          params: { search, page },
        }
      );
      setMembers(response.data.members);
      setTotal(response.data.totalMembers); // Adjust to match the backend response field
    } catch (err) {
      console.error(
        "Error fetching members:",
        err.response?.data || err.message
      );
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [search, page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member? This will remove them from both members and users.")) return;

    try {
      const response = await axios.delete(
        `https://fronttest-taupe.vercel.app/api/admin/members/${id}`
      );

      if (response.status === 200) {
        alert("Member successfully deleted from both collections");
        fetchMembers(); // Refresh the member list after deletion
      }
    } catch (err) {
      console.error("Error deleting member:", err);
      alert("Failed to delete the member: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-extrabold text-gray-700 mb-6">
          Manage Members
        </h2>

        {/* Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search members by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 w-full md:w-1/3"
          />
        </div>

        {/* Members Table */}
        <div className="overflow-x-auto shadow rounded-lg bg-white">
          <table className="min-w-full text-left table-auto">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base">
                  Name
                </th>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base">
                  Email
                </th>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base">
                  Membership Status
                </th>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base">
                  Renewal Status
                </th>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base">
                  Expiry Date
                </th>
                <th className="px-6 py-3 font-semibold text-sm sm:text-base text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr
                    key={member._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="px-6 py-3 text-gray-700 text-sm sm:text-base">
                      {member.firstName} {member.lastName}
                    </td>
                    <td className="px-6 py-3 text-gray-700 text-sm sm:text-base">
                      {member.email}
                    </td>
                    <td className="px-6 py-3 text-sm sm:text-base">
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                          member.membershipStatus === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {member.membershipStatus}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm sm:text-base">
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                          member.renewalStatus === "renewed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {member.renewalStatus}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-700 text-sm sm:text-base">
                      {member.membershipExpiryDate
                        ? new Date(
                            member.membershipExpiryDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => handleDelete(member._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-3 text-center text-gray-500 italic"
                  >
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold text-sm sm:text-base">
            Page {page}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={members.length === 0}
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminMembers;
