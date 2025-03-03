import React from "react";
import logo from "../assets/image/nice.png";
import students from "../assets/image/Rectangle 393.png";

const ScholarshipSearch = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-6 mx-auto">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-30 mt-[-40px]" />
        </div>
        <nav className="space-x-6 text-blue-700">
          <a href="#" className="hover:underline">Recently viewed</a>
          <a href="#" className="hover:underline">Saved scholarships</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mt-10">
        {/* Search Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-semibold mb-4">
            Find and Apply for Scholarships <span className="text-blue-700">easily</span>
          </h1>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Enter a keyword or select a filter to get started"
              className="w-full p-2 border rounded"
            />

            {/* Filters */}
            <div className="mt-4">
              <p className="font-semibold">Scholarship filters</p>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <button className="border rounded-xl px-4 py-2">By study level</button>
                <button className="border rounded-xl px-4 py-2">By country</button>
                <button className="border rounded-xl px-4 py-2">By field of study</button>
                <button className="border rounded-xl px-4 py-2 col-span-2">By sponsoring organisation</button>
                <button className="border rounded-xl px-4 py-2">By deadline</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
              <button className="text-blue-700 underline">Reset</button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/3">
          <img src={students} alt="Students" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-blue-700 text-white px-6 py-3 rounded mt-10 shadow-lg">
        See All Scholarships
      </button>
    </div>
  );
};

export default ScholarshipSearch;
