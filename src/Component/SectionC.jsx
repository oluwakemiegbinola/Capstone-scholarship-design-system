import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SectionC() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center">
      <div className="w-[1200px] max-w-full px-4 animate-fade-slide-up">
        <h1 className="text-5xl font-bold text-center mb-16 whitespace-nowrap animate-fade-in">
          Find <span className="text-[#0000FF] animate-float inline-block">Scholarships</span> that match your goals
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="flex transform transition-all duration-300 hover:scale-[1.02]">
            <select
              className="w-[120px] h-[60px] px-4 bg-white border border-r-0 border-gray-200 rounded-l-lg text-gray-600 focus:outline-none appearance-none cursor-pointer transition-colors hover:bg-gray-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px'
              }}
            >
              <option>Filter</option>
              <option>By Study Level</option>
              <option>By Field of Study</option>
              <option>By Country</option>
              <option>By Sponsoring Organisation</option>
              <option>By Deadline</option>
            </select>
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-transform duration-300 transform">
                <Search className={`w-5 h-5 text-gray-400 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
              </div>
              <input
                type="text"
                placeholder="Search a keyword or select a filter to get started"
                className="w-full h-[60px] pl-12 pr-4 border border-gray-200 rounded-r-lg focus:outline-none focus:border-blue-300 transition-all duration-300"
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button 
              className="bg-[#0000FF] text-white font-semibold px-12 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-search-pulse hover:animate-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Search Scholarships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;