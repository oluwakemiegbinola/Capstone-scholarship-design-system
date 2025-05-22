import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images for background texts and quote icon
import testimoImage from '../assets/image/icon/Testimonials.png'; // Image for "Testimo" background text
import tudentImage from '../assets/image/icon/Student.png'; // Image for "tudent" background text
import quoteImage from '../assets/image/icon/vector.png'; // Image for quote icon

const testimonials = [
  {
    quote: "This scholarship helped me focus and thrive.",
    name: "Laitan Solape",
    title: "STEM Scholarship Recipient",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    quote: "The support was empowering from start to finish.",
    name: "David Adeyemi",
    title: "Mechanical Engineering Scholar",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    quote: "Capstone believed in me — and that changed everything.",
    name: "Zainab Ibrahim",
    title: "Renewable Energy Scholar",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    quote: "It was more than funding — it was belief in my potential.",
    name: "Fatima Abdullahi",
    title: "Public Health & Biotechnology Student",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
  },
  {
    quote: "I'm now able to explore research I never thought I could afford.",
    name: "Tobi Alade",
    title: "Scholarship Recipient",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
  },
  {
    quote: "Capstone Scholarship took me from surviving in school to thriving",
    name: "Maryam Bello",
    title: "Social Science Grant Awardee",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
  },
  {
    quote: "Hard work truly gets noticed.",
    name: "Nafisat Abubakar",
    title: "Arts Scholarship Recipient",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
  },
  {
    quote: "This scholarship let me focus on real solutions.",
    name: "Chuka Eze",
    title: "Engineering Scholarship Recipient",
    image: "https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg"
  },
  {
    quote: "This scholarship let me focus on real solutions.",
    name: "Blessing Otobo",
    title: "Mass Communication Scholar",
    image: "https://images.pexels.com/photos/3771126/pexels-photo-3771126.jpeg"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Images */}
      <img 
        src={testimoImage} 
        alt="Testimo Background" 
        className="absolute top-35 right-[-1rem] w-[420px] opacity-20 animate-fade-in"
      />
      <img 
        src={tudentImage} 
        alt="tudent Background" 
        className="absolute bottom-0 left-[-1rem] w-[420px] opacity-20 animate-fade-in"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-black mb-4 animate-bounce">STUDENT <span className='text-[#0404FE]'>TESTIMONIALS</span></h1>
          <p className="text-gray-600 text-lg animate-pulse">Hear from Students like you!</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-blue-50/50 rounded-3xl p-8 relative transform transition-all duration-500 hover:shadow-xl ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              } animate-fade-slide-up`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: `perspective(1000px) rotateY(${isAnimating ? '90deg' : '0deg'})`
              }}
            >
              <img 
                src={quoteImage} 
                alt="Quote" 
                className="absolute top-4 left-6 w-10 h-10 text-blue-300 animate-fade-in animate-bounce"
              />
              <div className="mb-8 pt-8">
                <p className="text-gray-800 text-lg leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover transform transition-transform hover:scale-110 animate-pulse"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation and Dots Combined */}
        <div className="flex flex-col items-center gap-2 mt-6">
          {/* Navigation */}
          <div className="flex justify-end items-center gap-3 w-full mb-[-2rem]">
            <button 
              onClick={handlePrevious}
              disabled={isAnimating}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 hover:shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            </button>
            <button 
              onClick={handleNext}
              disabled={isAnimating}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 hover:shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-150 ${
                  index === currentPage ? 'bg-blue-600 scale-125 animate-pulse' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;