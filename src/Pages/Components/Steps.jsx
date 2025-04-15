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
    <div className="p-5 max-w-4xl mx-auto bg-white min-h-screen">
      {/* Stepper Circles */}
      <div className="flex justify-between items-center mb-4 space-x-4">
        {steps.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="text-xs text-gray-500 uppercase mb-1">Step {index + 1}</div>
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
            <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
            <span className="text-xs text-gray-500">
              {step > index + 1 ? "Completed" : "Not started"}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">Ghana STEM Excellence Scholarship Application Form</h2>
        <div className="flex items-center mt-2">
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
      <div className="border p-6 rounded-lg shadow bg-white space-y-4">
        {step === 1 && <div>Personal Details Form</div>}
        {step === 2 && <div>Academic Information Form</div>}
        {step === 3 && <div>Upload Supporting Documents</div>}
        {step === 4 && <div>Write Your Statement of Purpose</div>}
        {step === 5 && <div>Review Application & Submit</div>}

        <div className="flex justify-between pt-4">
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
