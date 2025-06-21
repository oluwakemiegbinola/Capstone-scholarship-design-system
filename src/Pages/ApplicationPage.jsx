import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Placeholder images
import capstoneLogo from '../assets/image/nice.png';
import bannerImage from '../assets/image/form/banner.png';
import userProfile from '../assets/image/form/face.png';
import pdfIcon from '../assets/image/pdfIcon.png'; // Keep PDF icon
import number1Image from '../assets/image/form/1.png';
import number2Image from '../assets/image/form/2.png';
import number3Image from '../assets/image/form/3.png';
import number4Image from '../assets/image/form/4.png';
import number5Image from '../assets/image/form/5.png';
import { Brain } from 'lucide-react';

const ScholarshipForm = () => {
  const navigate = useNavigate();
  const [formFilled, setFormFilled] = useState(false);
  const [institutionName, setInstitutionName] = useState('');
  const [programOfStudy, setProgramOfStudy] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [gpa, setGpa] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null); // Changed to single file
  const [progress, setProgress] = useState(0);

  // Calculate progress whenever form fields change
  useEffect(() => {
    const totalFields = 5;
    let filledFields = 0;

    if (institutionName.trim()) filledFields++;
    if (programOfStudy.trim()) filledFields++;
    if (currentLevel) filledFields++;
    if (gpa.trim()) filledFields++;
    if (uploadedFile) filledFields++;

    const progressPercentage = (filledFields / totalFields) * 100;
    setProgress(progressPercentage);
  }, [institutionName, programOfStudy, currentLevel, gpa, uploadedFile]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Only take first file
    if (!file) return;

    if (!['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      alert(`Unsupported file type: ${file.name}. Please upload a Word document (.doc or .docx).`);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadedFile({ name: file.name, progress: 100, status: 'Error: File size too large', error: true, size: file.size });
      return;
    }

    const newFile = { name: file.name, progress: 0, status: 'Uploading', error: false, size: file.size };
    setUploadedFile(newFile);

    const reader = new FileReader();
    reader.onload = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setUploadedFile({ ...newFile, progress: 100, status: 'Completed' });
        } else {
          setUploadedFile({ ...newFile, progress: currentProgress });
        }
      }, 200);
    };
    reader.readAsDataURL(file);
  };

  const handleCancelUpload = () => {
    setUploadedFile(null);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (institutionName && programOfStudy && currentLevel && gpa && uploadedFile) {
      setFormFilled(true);
      navigate('/step3');
    } else {
      alert('Please fill all fields and upload a transcript before proceeding.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <img src={capstoneLogo} alt="Capstone Scholarship" className="h-18 w-auto" />
          </div>
          <nav className="flex-1 flex justify-center">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Find Scholarships</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
            <img src={userProfile} alt="User Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full h-60 relative">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 19, 211, 0.28)' }}
        />
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-10 py-10">
        {/* Progress Steps */}
        <div className="mb-8">
          {/* Circles and Progress Bars Row */}
          <div className="flex items-center justify-between gap-2">
            {/* Step 1 Circle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-blue-600 flex items-center justify-center">
                <img src={number1Image} alt="Step 1" className="w-5 h-5 object-contain -ml-1.5" />
              </div>
            </div>
            {/* Step 1 Progress Bar */}
            <div className="flex items-center w-[12%] -ml-5">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-full h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            {/* Step 2 Circle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-blue-600 flex items-center justify-center">
                <img src={number2Image} alt="Step 2" className="w-5 h-5 object-contain" />
              </div>
            </div>
            {/* Step 2 Progress Bar */}
            <div className="flex items-center w-[12%] -ml-7">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            {/* Step 3 Circle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <img src={number3Image} alt="Step 3" className="w-5 h-5 object-contain" />
              </div>
            </div>
            {/* Step 3 Progress Bar */}
            <div className="flex items-center w-[12%] -ml-7">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            {/* Step 4 Circle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <img src={number4Image} alt="Step 4" className="w-5 h-5 object-contain" />
              </div>
            </div>
            {/* Step 4 Progress Bar */}
            <div className="flex items-center w-[12%] -ml-7">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            {/* Step 5 Circle */}
            <div className="flex flex-col items-center -ml-5">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <img src={number5Image} alt="Step 5" className="w-5 h-5 object-contain" />
              </div>
            </div>
            {/* Step 5 Progress Bar */}
            <div className="flex items-center w-[12%] -ml-7">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-0 h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Step Descriptions and Status Row */}
          <div className="flex justify-between gap-2 -mt-2">
            {/* Step 1 Description and Status */}
            <div className="flex flex-col items-center ml-10">
              <span className="text-sm text-[#000000]/50">STEP 1</span>
              <span className="text-sm text-black ml-4">Personal Details</span>
              <span className="mt-1 ml-2 text-xs text-[#0000FE] bg-[#CCCFFF] rounded-full px-2 py-1">Completed</span>
            </div>
            <div className="w-[12%]"></div>
            {/* Step 2 Description and Status */}
            <div className="flex flex-col items-center ml-20">
              <span className="text-sm text-[#000000]/50 mr-4">STEP 2</span>
              <span className="text-sm text-gray-600 ml-4">Academic Information</span>
              <span className="mt-1 text-xs text-[#0000FE] ml-0 border border-[#0000FE] rounded-full px-3 py-1 whitespace-nowrap ">In Progress</span>
            </div>
            <div className="w-[12%]"></div>
            {/* Step 3 Description and Status */}
            <div className="flex flex-col items-center ml-30">
              <span className="text-sm text-[#000000]/50 -ml-15">STEP 3</span>
              <span className="text-sm text-gray-600 mr-8">Supporting Documents</span>
              <span className="mt-1 text-xs mr-10 text-gray-400">Not Started</span>
            </div>
            <div className="w-[12%]"></div>
            {/* Step 4 Description and Status */}
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#000000]/50 -ml-8">STEP 4</span>
              <span className="text-sm text-gray-600 whitespace-nowrap ml-15">Write your Statement <br /> of Purpose</span>
              <span className="mt-1 text-xs text-gray-400">Not Started</span>
            </div>
            <div className="w-[12%]"></div>
            {/* Step 5 Description and Status */}
            <div className="flex flex-col items-center ml-5">
              <span className="text-sm text-[#000000]/50 mr-13">STEP 5</span>
              <span className="text-sm text-gray-600 whitespace-nowrap -mr-5">Review Application <br /> and Submit</span>
              <span className="mt-1 text-xs text-gray-400 -ml-10">Not Started</span>
            </div>
            <div className="w-[12%]"></div>
          </div>
        </div>

        {/* Form Title and Status */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Ghana STEM Excellence Scholarship Application Form</h2>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-600">Application status:</span>
            <div className="w-24 h-1 bg-gray-200 rounded-full ml-2">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${30}%` }}></div>
            </div>
            <span className="ml-2 text-sm text-blue-600">In Progress</span>
          </div>
        </div>

        {/* Form Section with Right-Side Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form Content */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 shadow-md rounded-md">
              <form>
                <h3 className="text-xl font-semibold mb-6">Step 2: Academic Information</h3>
                <div className="space-y-6">
                  {/* Institution Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Institution Name</label>
                    <input
                      type="text"
                      value={formFilled ? 'Egbuna Princess University' : institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="Start typing your institution name"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                  </div>

                  {/* Program of Study and Current Level */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Program of Study</label>
                      <input
                        type="text"
                        value={formFilled ? 'Computer Science' : programOfStudy}
                        onChange={(e) => setProgramOfStudy(e.target.value)}
                        placeholder="e.g. Computer Science, Engineering"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Current Level</label>
                      <select
                        value={formFilled ? 'Level 300' : currentLevel}
                        onChange={(e) => setCurrentLevel(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                      >
                        <option value="">Select your current level</option>
                        <option value="Level 100">Level 100</option>
                        <option value="Level 200">Level 200</option>
                        <option value="Level 300">Level 300</option>
                        <option value="Level 400">Level 400</option>
                      </select>
                    </div>
                  </div>

                  {/* Grade Point Average (GPA) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Grade Point Average (GPA)</label>
                    <input
                      type="text"
                      value={formFilled ? '3.8' : gpa}
                      onChange={(e) => setGpa(e.target.value)}
                      placeholder="Enter your current GPA"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                  </div>

                  {/* Upload Transcript */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Transcript</label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      {uploadedFile ? (
                        <div className="bg-gray-50 p-3 rounded-md mt-2">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <img src={pdfIcon} alt="PDF Icon" className="w-6 h-6 mr-2" />
                              <span>{uploadedFile.name} ({uploadedFile.progress}%)</span>
                            </div>
                            <div className="flex items-center">
                              <span className={uploadedFile.error ? 'text-red-600' : uploadedFile.progress === 100 ? 'text-[#0000FE]' : 'text-gray-600'}>
                                {uploadedFile.status}
                              </span>
                              {uploadedFile.progress < 100 && !uploadedFile.error && (
                                <button
                                  type="button"
                                  className="ml-2 text-[#0000FE] hover:text-blue-800"
                                  onClick={handleCancelUpload}
                                >
                                  Cancel
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="w-full h-1 bg-gray-200 rounded-full">
                            <div className="h-full bg-[#0000FE] rounded-full" style={{ width: `${uploadedFile.progress}%` }}></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">Choose a file or drag and drop here</p>
                          <p className="text-xs text-red-600">*file supported: Word format (.doc, .docx), max. 5MB</p>
                          <label className="mt-4 inline-block">
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Browse files</span>
                            <input type="file" className="hidden" onChange={handleFileUpload} accept=".doc,.docx" />
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right-Side Actions */}
          <div className="md:col-span-1 flex flex-col items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-2 w-full max-w-xs">
              Save Progress
            </button>
            <a href="#" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 mb-2 w-full max-w-xs text-center block">
              Back to Homepage
            </a>
            <p className="text-sm text-gray-600 mt-2 flex items-center justify-end">
              <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mr-2 text-gray-600 text-xs">i</span>
              Note: Applications closes on 26th March 2025
            </p>
          </div>

          {/* Navigation Buttons Moved Down */}
          <div className="md:col-span-3 flex justify-between mt-8">
            <button
              id="back-button"
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
            <a
              id="next-button"
              href="/step3"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
              onClick={handleNext}
            >
              Next
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScholarshipForm;