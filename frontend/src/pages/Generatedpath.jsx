import React, { useEffect, useState } from "react";
import API from "../services/api";
import CareerCard from "../components/CareerCard";

const Generatedpath = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

 const fetchCareers = async () => {
  try {
    const res = await API.get("/user/all-generated-path");

    console.log("API RESPONSE:", res.data);

    // ✅ Extract careers from paginated response
    setCareers(res.data?.content || []);

  } catch (error) {
    console.error("Error fetching careers:", error);
    setCareers([]);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchCareers();
}, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-10 px-4 md:px-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Generated Career Paths
        </h2>
        <p className="text-gray-600 mt-2">
          Explore all AI-generated career recommendations
        </p>
      </div>

      {/* Grid always present */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {/* 🔄 Loading Skeleton */}
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 space-y-4 animate-pulse"
            >
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>

              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

              <div className="h-20 bg-gray-100 rounded"></div>

              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}

        {/* ❌ Empty State */}
        {!loading && careers.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No career paths generated yet.
          </div>
        )}

        {/* ✅ Actual Data */}
        {!loading &&
          careers.length > 0 &&
          careers.map((career, index) => (
            <CareerCard key={index} data={career} />
          ))}

      </div>
    </section>
  );
};

export default Generatedpath;