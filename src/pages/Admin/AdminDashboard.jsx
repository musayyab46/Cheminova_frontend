// pages/Admin/AdminDashboard.jsx

import { useEffect, useState } from "react";
import adminApi from "../../services/adminApi";
import { Users, Activity, Route } from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPaths: 0,
    activeUsers: 0,
  });

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      const { data } =
        await adminApi.get(
          "/admin/stats"
        );

      setStats({
        totalUsers:
          data.totalUsers || 0,

        totalPaths:
          data.totalPaths || 0,

        activeUsers:
          data.activeUsers || 0,
      });

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
    },
    {
      title: "Generated Paths",
      value: stats.totalPaths,
      icon: Route,
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      icon: Activity,
    },
  ];

  const chartData = [
    {
      name: "Users",
      value: stats.totalUsers,
    },
    {
      name: "Paths",
      value: stats.totalPaths,
    },
    {
      name: "Active",
      value: stats.activeUsers,
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-lg font-semibold">
          Loading dashboard...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        bg-red-100
        text-red-700
        p-4
        rounded-lg
      "
      >
        {error}
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-2xl md:text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Overview of platform
          activity
        </p>

      </div>

      {/* Stats Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >
        {cards.map(
          (card, index) => {
            const Icon =
              card.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  p-6
                  hover:shadow-xl
                  transition
                "
              >
                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-gray-500 text-sm">
                      {card.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-3">
                      {card.value}
                    </h2>

                  </div>

                  <div
                    className="
                    p-4
                    rounded-full
                    bg-gray-100
                  "
                  >
                    <Icon size={30} />
                  </div>

                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Charts */}

      <div
        className="
        mt-8
        bg-white
        rounded-2xl
        shadow-md
        p-4
        md:p-6
      "
      >
        <h2 className="text-xl font-bold mb-6">
          Statistics Overview
        </h2>

        <div className="w-full h-[300px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={chartData}
            >
              <CartesianGrid />

              <XAxis
                dataKey="name"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#6B7280"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* Summary Section */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
      >

        <div
          className="
          bg-white
          p-6
          rounded-2xl
          shadow
        "
        >
          <h3 className="font-bold text-lg mb-3">
            User Summary
          </h3>

          <p>
            Total Users:
            {" "}
            {stats.totalUsers}
          </p>

          <p>
            Active Users:
            {" "}
            {stats.activeUsers}
          </p>

        </div>

        <div
          className="
          bg-white
          p-6
          rounded-2xl
          shadow
        "
        >
          <h3 className="font-bold text-lg mb-3">
            Path Summary
          </h3>

          <p>
            Total Generated
            Paths:
            {" "}
            {stats.totalPaths}
          </p>

        </div>

      </div>

    </div>
  );
}