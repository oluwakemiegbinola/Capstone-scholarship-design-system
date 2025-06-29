import { Bell, ChevronDown, Bookmark } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/nice.png";

const Header = ({ setSelectedCategories, selectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  return (
    <header className="font-avenir fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-12 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-20 w-40" />
      </div>

      <nav className="hidden space-x-6 text-lg md:flex">
        <Link to="" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="" className="hover:text-blue-600">
          Find Scholarships
        </Link>
        <Link to="" className="hover:text-blue-600">
          How It Works
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {isOpen && (
            <div className="absolute left-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-md">
              {[
                "By Study Level",
                "By Field of Study",
                "By Sponsorship Type",
                "By Application Deadline",
                "By Country",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`block w-full px-4 py-2 text-left ${
                    selectedCategories.includes(category)
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link to="" className="hover:text-blue-600">
          Contact Us
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-700 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </div>
        <Bookmark className="h-6 w-6 fill-[#0000FE] text-[#0000FE]" />
        <Link
          to="/apply"
          className="rounded-lg bg-[#0000FE] px-6 py-2 text-lg text-white hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
