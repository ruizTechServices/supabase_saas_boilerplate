import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-700">Section One</h2>
            <p className="mt-2 text-gray-600">
              This is a section of your admin dashboard.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-700">Section Two</h2>
            <p className="mt-2 text-gray-600">
              This section could contain charts or summaries.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold text-gray-700">
              Section Three
            </h2>
            <p className="mt-2 text-gray-600">
              Use this section for any other information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
