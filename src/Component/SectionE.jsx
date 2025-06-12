import React from 'react';
import arrowDown2 from '../assets/image/Group 88.JPG';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${arrowDown2})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-slide-up whitespace-nowrap">
            Start your Journey Today!
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-slide-up whitespace-nowrap" style={{ animationDelay: '100ms' }}>
            Apply Now
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-16">
          <p className="text-xl md:text-2xl text-white/90 animate-fade-slide-up whitespace-nowrap" style={{ animationDelay: '200ms' }}>
            Don't miss your chance to join
          </p>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-slide-up whitespace-nowrap" style={{ animationDelay: '250ms' }}>
            Ghana's next generation of
          </p>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-slide-up whitespace-nowrap" style={{ animationDelay: '300ms' }}>
            innovators and changemakers.
          </p>
        </div>

        <a 
          href="#apply"
          className="inline-block bg-blue-600 text-white text-xl font-semibold px-16 py-5 rounded-full 
                   transform transition-all duration-300 
                   hover:bg-blue-700 hover:scale-105 active:scale-95
                   animate-fade-slide-up shadow-lg hover:shadow-xl"
          style={{ animationDelay: '400ms' }}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default App;