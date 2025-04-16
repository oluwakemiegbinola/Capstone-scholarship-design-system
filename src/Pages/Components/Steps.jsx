import React, { useState } from "react";

const Steps = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { title: "Personal Info" },
    { title: "Academics" },
    { title: "Documents" },
    { title: "SOP" },
    { title: "Review" }
  ];

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col gap-8 h-full">

        {/* Stepper Circles */}
        <div className="flex justify-between items-center">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="text-xs text-gray-500 uppercase mb-1">
                Step {index + 1}
              </div>
              <div
                className={`w-14 h-14 flex items-center justify-center border-4 rounded-full text-lg font-bold ${
                  step > index + 1
                    ? "border-blue-500 text-blue-500"
                    : step === index + 1
                    ? "border-blue-500 text-blue-500 bg-blue-100"
                    : "border-gray-400 border-dashed text-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {item.title}
              </p>
              <span className="text-xs text-gray-500">
                {step > index + 1 ? "Completed" : "Not started"}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div>
          <h2 className="text-xl font-bold text-center">
            Ghana STEM Excellence Scholarship Application Form
          </h2>
          <div className="flex items-center mt-4">
            <span className="text-gray-600 text-sm">Application status:</span>
            <div className="w-full h-2 bg-gray-200 rounded-full mx-2">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-blue-600 font-semibold text-sm">
              {step === 5 ? "Completed" : "In progress"}
            </span>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 border p-6 rounded-lg shadow-inner bg-white space-y-4">
          {step === 1 && <div>Personal Details Form</div>}
          {step === 2 && <div>Academic Information Form</div>}
          {step === 3 && <div>Upload Supporting Documents</div>}
          {step === 4 && <div>Write Your Statement of Purpose</div>}
          {step === 5 && <div>Review Application & Submit</div>}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={step === 5}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
