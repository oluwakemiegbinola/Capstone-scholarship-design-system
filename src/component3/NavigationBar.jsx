import React from "react";

const NavigationBar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    } else {
      console.warn(`Section with id '${sectionId}' not found.`);
    }
  };

  return (
    <div className="w-full bg-[#EBEDFF] py-2 border-b border-gray-200 navbar">
      <div className="flex justify-around max-w-6xl mx-auto px-4 bg-white p-3 rounded-lg shadow-md">
        {[
          { id: "overview", label: "Overview" },
          { id: "about-scholarship", label: "About Scholarship" },
          { id: "eligibility-criteria", label: "Eligibility Criteria" },
          { id: "scholarship-requirements", label: "Scholarship Requirements" },
          { id: "how-to-apply", label: "How to Apply" },
          { id: "faqs", label: "FAQs" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
