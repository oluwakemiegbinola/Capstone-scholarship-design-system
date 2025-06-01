import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronDown, Bookmark } from "lucide-react";
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
    <header className="flex justify-between items-center px-12 py-4 shadow-md bg-white font-avenir">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-40 h-20" />
      </div>

      <nav className="hidden md:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/scholarships" className="hover:text-blue-600">Find Scholarships</Link>
        <Link to="/how-it-works" className="hover:text-blue-600">How It Works</Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
              {["By Study Level", "By Field of Study", "By Sponsorship Type", "By Application Deadline", "By Country"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`block px-4 py-2 w-full text-left ${
                    selectedCategories.includes(category) ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-700 hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>
        <Bookmark className="w-6 h-6 text-[#0000FE] fill-[#0000FE]" />
        <Link to="/apply" className="bg-[#0000FE] text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700">
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Header;