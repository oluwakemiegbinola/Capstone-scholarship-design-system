import React from 'react';
import number1 from '../assets/image/sectionb/11.png'; // Number 1 PNG
import number2 from '../assets/image/sectionb/22.png'; // Number 2 PNG
import number3 from '../assets/image/sectionb/33.png'; // Number 3 PNG
import arrowDown1 from '../assets/image/sectionb/arrow1.png'; // Dashed arrow 1
import arrowDown2 from '../assets/image/sectionb/arrow2.png'; // Dashed arrow 2

const SectionB = () => {
  return (
    <div className="bg-[#ffffff] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-[#000000] mb-2 uppercase">
          How <span className='text-[#0404FE]'>Capstone</span> Works
        </h2>
        <p className="text-[17px] text-[#000000] mb-30">
          Start getting Scholarships in three simple steps!
        </p>

        {/* Vertical Steps Layout */}
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1 */}
          <div className="flex items-center justify-center w-full -mr-25">
            {/* Number 1 */}
            <div className="relative" style={{ width: '250px', height: '250px' }}>
              <img src={number1} alt="Number 1" className="w-full h-full" />
            </div>
            {/* Content (Title, Description, Illustration Placeholder) */}
            <div className="flex flex-col items-start ml-16 text-left">
              <h3 className="text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Find Scholarships
              </h3>
              <p className="text-[#000000] text-[15px]">
                Easily discover scholarships tailored to your<br />
                qualifications and find the best opportunities for you.
              </p>
              <div className="w-28 h-28 md:w-32 md:h-32 mt-4">
                {/* Illustration removed */}
              </div>
            </div>
          </div>

          {/* Arrow 1 - Moved to the left */}
          <img
            src={arrowDown1}
            alt="Dashed arrow pointing down from Step 1 to Step 2"
            className="h-105 w-auto -mt-[120px] -mb-1 -ml-170"
          />

          {/* Step 2 - Reversed Order */}
          <div className="flex items-center justify-center w-full -mt-[110px] ml-24">
            {/* Content (Title, Description, Illustration Placeholder) - On the left */}
            <div className="flex flex-col items-start -mr-20 text-left -mt-10">
              <h3 className="text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Apply for <br />Scholarships
              </h3>
              <p className="text-[#000000] text-[15px]">
                Submit your scholarship application easily<br />
                with guided steps and requirements.
              </p>
              <div className="w-28 h-28 md:w-32 md:h-32 mt-4">
                {/* Illustration removed */}
              </div>
            </div>
            {/* Number 2 - Moved to the right */}
            <div
              className="relative ml-40 mb-14 -mt-36"
              style={{ width: '250px', height: '250px' }}
            >
              <img src={number2} alt="Number 2" className="w-full h-full" />
            </div>
          </div>

          {/* Arrow 2 - Same size as Arrow 1 and reduced gap */}
          <img
            src={arrowDown2}
            alt="Dashed arrow pointing down from Step 2 to Step 3"
            className="h-150 w-auto -mt-[380px] -ml-40" // Changed h-70 to h-105, adjusted -mt
          />

          {/* Step 3 */}
          <div className="flex items-center justify-center w-full -mt-39 -mr-37">
            {/* Number 3 */}
            <div className="relative" style={{ width: '250px', height: '250px' }}>
              <img src={number3} alt="Number 3" className="w-full h-full" />
            </div>
            {/* Content (Title, Description, Illustration Placeholder) */}
            <div className="flex flex-col items-start ml-16 text-left">
              <h3 className="text-[35px] font-bold text-[#000000] mb-2 uppercase">
                Track Applications
              </h3>
              <p className="text-[#000000] text-[15px]">
                Stay updated on your application status, receive<br />
                timely feedback, and track your progress—all in one place
              </p>
              <div className="w-28 h-28 md:w-32 md:h-32 mt-4">
                {/* Illustration removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;