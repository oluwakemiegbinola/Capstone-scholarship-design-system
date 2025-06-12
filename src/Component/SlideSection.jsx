import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Import logos and images
import googleLogo from '../assets/image/logo/Frame 600.png';
import mtnLogo from '../assets/image/logo/mtn-new-logo 1.png';
import shellLogo from '../assets/image/logo/shell-3 1.png';
import dangoteLogo from '../assets/image/logo/dangote.png';
import piggyvestLogo from '../assets/image/logo/piggevest.png';
import ubaLogo from '../assets/image/logo/uba.png';
import flutterwaveLogo from '../assets/image/logo/flutterwave.png';
import mastercardLogo from '../assets/image/logo/mastercard-4 1.png';
import airtelLogo from '../assets/image/logo/airtel.png';
import bookmark from '../assets/image/icon/bookmark.png';
import money from '../assets/image/icon/dollar.png'; // Added money image import
import calendar from '../assets/image/icon/calender.png'; // Added calendar image import

const Slidesection = () => {
  const [bookmarked, setBookmarked] = useState({});

  const scholarships = [
    {
      logo: googleLogo,
      title: 'Africa Tech\nScholars Program',
      provider: 'Google',
      applicants: '300+ applicants',
      amount: '$10,000 Tech Grant + Mentorship',
      deadline: '30th March 2025',
      daysLeft: 'Closes in 20 days',
      tags: ['Fully Funded', 'STEM Research', 'National Scholarship'],
    },
    {
      logo: mtnLogo,
      title: 'Bright Future\nScholarship',
      provider: 'MTN',
      applicants: '1.2K+ applicants',
      amount: 'Full Tuition + Living Stipend',
      deadline: 'April 15, 2025',
      daysLeft: 'Closes in 32 days',
      tags: ['Fully Funded', 'STEM Research', 'Undergraduate'],
    },
    {
      logo: shellLogo,
      title: 'Undergraduate\nMerit Scholarship',
      provider: 'Shell',
      applicants: '600+ applicants',
      amount: '¥500,000 per year (Tuition & Books)',
      deadline: '25th May 2025',
      daysLeft: 'Closes in 62 days',
      tags: ['Merit-Based', 'Engineering', 'Business'],
    },
    {
      logo: dangoteLogo,
      title: 'Foundation\nUndergraduate\nScholarship',
      provider: 'DANGOTE',
      applicants: '2K+ applicants',
      amount: 'Full Tuition + Monthly Stipend',
      deadline: 'April 25, 2025',
      path: '/scholarships/dangote',
      daysLeft: 'Closes in 42 days',
      tags: ['Fully Funded', 'Undergraduate', 'Business & Finance'],
    },
    {
      logo: piggyvestLogo,
      title: 'Accounting\nMasters Scholarship',
      provider: 'PiggyVest',
      applicants: '1.5K+ applicants',
      amount: 'Full Tuition + Travel Allowance',
      deadline: 'June 1, 2025',
      daysLeft: 'Closes in 89 days',
      tags: ['Fully Funded', 'International', 'Post Graduate'],
    },
    {
      logo: ubaLogo,
      title: 'Undergraduate\nMerit Scholarship',
      provider: 'UBA',
      applicants: '850+ applicants',
      amount: '¥1,000,000 per year for 4 years',
      deadline: 'April 20, 2025',
      daysLeft: 'Closes in 38 days',
      tags: ['Undergraduate', 'Financial Aid', 'All Fields'],
    },
    {
      logo: flutterwaveLogo,
      title: 'Fintech Scholars\nProgram',
      provider: 'Flutterwave',
      applicants: '1.7K+ applicants',
      amount: '$5,000 Grant + Paid Internship',
      deadline: 'March 28, 2025',
      daysLeft: 'Closes in 19 days',
      tags: ['FinTech', 'Tech & All', 'Merit-Based'],
    },
    {
      logo: mastercardLogo,
      title: 'Future Leaders\nScholarship',
      provider: 'MasterCard',
      applicants: '300+ applicants',
      amount: 'Full Tuition + Career Mentorship',
      deadline: 'June 20, 2025',
      daysLeft: 'Closes in 75 days',
      tags: ['Social Impact', 'Humanitarian Studies', 'Undergraduate'],
    },
    {
      logo: airtelLogo,
      title: 'Young Engineers\nGrant',
      provider: 'Airtel',
      applicants: '900+ applicants',
      amount: '¥750,000 per year (Tuition & Innovative Funding)',
      deadline: 'April 30, 2025',
      daysLeft: 'Closes in 32 days',
      tags: ['Energy & Sustainability', 'Engineering', 'Fully Funded'],
    }
  ];

  const toggleBookmark = (index) => {
    setBookmarked(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="py-10 bg-gradient-to-r from-blue-50 to-purple-50">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        <span className="text-[#000000]">FEATURED </span>
        <span className="text-[#0000FE]">SCHOLARSHIPS</span>
      </h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          className="relative pb-16"
        >
          {scholarships.map((scholarship, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-5 mx-2 flex flex-col"
                style={{ height: "380px" }}>
                
                {/* Bookmark Image */}
                <button 
                  className="absolute top-8 right-6 z-10"
                  onClick={() => toggleBookmark(index)}
                >
                  <img 
                    src={bookmark} 
                    alt="Bookmark" 
                    className={`w-5 h-6 ${bookmarked[index] ? "text-blue-600" : "text-gray-300"}`} 
                  />
                </button>
                
                <div>
                  <div className="flex items-center">
                    <img 
                      src={scholarship.logo} 
                      alt={`${scholarship.provider} logo`} 
                      className="w-12 h-12 mr-3" 
                    />
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 whitespace-pre-line">{scholarship.title}</h3>
                      <p className="text-xs text-gray-500">{scholarship.provider} • {scholarship.applicants}</p>
                    </div>
                  </div>

                  <div className="mt-7 text-gray-600 text-sm">
                    <p className="font-semibold mb-3">
                      <img src={money} alt="Amount" className="inline w-4 h-4 mr-4" />
                      {scholarship.amount}
                    </p>
                    <p className="mt-1">
                      <img src={calendar} alt="Deadline" className="inline w-4 h-4 mr-4" />
                      {scholarship.deadline} <span className="text-red-500">{scholarship.daysLeft}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {scholarship.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-1 py-2 rounded-lg gap-5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons closer to content */}
                <div className="mt-16 flex justify-between">
                  <button className="bg-gray-200 text-gray-700 px-5 py-2 text-md rounded-md hover:bg-gray-300">
                    View Details
                  </button>
                  <button className="bg-blue-600 text-white px-5 py-2 text-md rounded-md hover:bg-blue-700">
                    Quick Apply
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <div className="custom-swiper-prev absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-20 cursor-pointer">
          <ChevronLeftIcon className="h-12 w-12 text-[#040498]" />
        </div>
        <div className="custom-swiper-next absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-20 cursor-pointer">
          <ChevronRightIcon className="h-12 w-12 text-[#040498]" />
        </div>
      </div>
    </div>
  );
};

export default Slidesection;