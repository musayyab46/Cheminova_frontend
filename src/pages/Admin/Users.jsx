import { useEffect, useState } from "react";
import adminApi from "../../services/adminApi";
import { Users as UsersIcon, UserX } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await adminApi.get("/admin/all-users");

      console.log(response.data);

      // users are inside content[]
      setUsers(response.data.content || []);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  const deactivateUser = async (id) => {
    const confirmDeactivate = window.confirm(
      "Deactivate this user?"
    );

    if (!confirmDeactivate) return;

    try {
      setActionLoading(id);

      await adminApi.delete(
        `/admin/deactivate-profile?id=${id}`
      );

      // Remove from UI immediately
      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Failed to deactivate user"
      );
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full p-4">

      <div className="flex items-center gap-3 mb-6">
        <UsersIcon size={28} />
        <h1 className="text-2xl font-bold">
          Users Management
        </h1>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <h2 className="font-semibold text-lg">
              {user.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {user.email}
            </p>

            <p className="text-sm mt-2">
              Phone: {user.phone}
            </p>

            <div className="flex justify-between items-center mt-4">

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  user.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>

              <button
                onClick={() =>
                  deactivateUser(user.id)
                }
                disabled={
                  actionLoading === user.id
                }
                className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-3
                  py-2
                  rounded-lg
                "
              >
                {actionLoading === user.id
                  ? "..."
                  : <UserX size={18} />}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Desktop */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Role
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  {user.phone}
                </td>

                <td className="p-4">
                  {user.role}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() =>
                      deactivateUser(user.id)
                    }
                    disabled={
                      actionLoading === user.id
                    }
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                    "
                  >
                    {actionLoading === user.id
                      ? "Processing..."
                      : "Deactivate"}
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;