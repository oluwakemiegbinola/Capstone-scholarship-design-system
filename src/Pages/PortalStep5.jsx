import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import GETImage from "../assets/image/portal4/image/get.png";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4Colour.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5Colour.svg";

export default function PortalStep5() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const stepImages = [
    StepOneImage,
    StepTwoImage,
    StepThreeImage,
    StepFourImage,
    StepFiveImage,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      alert("Please confirm that all information is accurate and agree to the terms and conditions before submitting.");
      return;
    }
    window.location.href = "/steps-completed";
  };

  const handleCheckboxChange = (e) => {
    setIsConfirmed(e.target.checked);
  };

  return (
    <section className="space-y-8">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-blue-600/30"></div>
        <img
          src={GETImage}
          alt="Ghana Education Trust Fund Logo"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-16 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 items-start gap-4">
          {stepImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Step ${index + 1} of the application process`}
                loading="lazy"
                className="w-full h-auto cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-medium">
            Ghana STEM Excellence Scholarship Application Form
          </h1>

          <div>
            <p className="flex items-center gap-2 text-xl sm:text-2xl text-gray-700">
              Application status:{" "}
              <div className="relative isolate h-3.5 w-48 sm:w-75 overflow-hidden rounded-full">
                <div className="absolute w-full h-full rounded-full bg-blue-200"></div>
                <div className="absolute z-10 h-full w-[95%] rounded-full bg-blue-700"></div>
              </div>
              <span className="font-bold text-blue-700">In Progress</span>
            </p>
          </div>
        </div>

        <form id="step5Form" onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full space-y-24">
            {/* Step 5: Review Application and Submit */}
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl">
                  <span className="font-bold">Step 5:</span> Review Application and Submit
                </h2>

                <p className="max-w-3xl text-base sm:text-lg text-gray-700">
                  Kindly review your application carefully and ensure that the
                  information you've provided across all steps is accurate.
                  Once you have cross-checked, you can submit your application.
                </p>
              </div>

              {/* PERSONAL INFORMATION */}
              <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 sm:px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-xl sm:text-2xl">Personal Information</h3>
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 text-xl sm:text-2xl font-medium text-blue-700"
                  >
                    Edit <FaRegEdit className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-base sm:text-lg">
                  <label htmlFor="firstName">
                    First Name: <input type="text" id="firstName" defaultValue="Princess" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="lastName">
                    Last Name: <input type="text" id="lastName" defaultValue="Egbuna" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="DOB">
                    Date of Birth: <input type="text" id="DOB" defaultValue="04-09-1997" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="mailAddress">
                    Email Address: <input type="email" id="mailAddress" defaultValue="princess.egbuna@gmail.com" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="NIN">
                    National Identity Number (NIN): <input type="text" id="NIN" defaultValue="1234-5678-9012" readOnly className="w-full sm:w-[30%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="streetAddress">
                    Street Address: <input type="text" id="streetAddress" defaultValue="12 Independence Avenue" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="city">
                    City: <input type="text" id="city" defaultValue="Ikeja" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="state">
                    State: <input type="text" id="state" defaultValue="Lagos" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="Country">
                    Country: <input type="text" id="Country" defaultValue="Nigeria" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="enrolled">
                    Are you currently enrolled in a tertiary institution: <input type="text" id="enrolled" defaultValue="Yes" readOnly className="w-full sm:w-[10%] font-medium bg-transparent outline-none" />
                  </label>
                </div>
              </div>

              {/* ACADEMIC INFORMATION */}
              <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 sm:px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-xl sm:text-2xl">Academic Information</h3>
                  <button type="button" className="inline-flex cursor-pointer items-center gap-2 text-xl sm:text-2xl font-medium text-blue-700">
                    Edit <FaRegEdit className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-base sm:text-lg">
                  <label htmlFor="institutionName">
                    Institution Name: <input type="text" id="institutionName" defaultValue="Babcock University" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="programOfStudy">
                    Program of Study: <input type="text" id="programOfStudy" defaultValue="Computer Science" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="currentLevel">
                    Current Level: <input type="text" id="currentLevel" defaultValue="300 Level" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="GPA">
                    Grade Point Average (GPA): <input type="text" id="GPA" defaultValue="3.68/5.0" readOnly className="w-full sm:w-[70%] font-medium bg-transparent outline-none" />
                  </label>
                  <label htmlFor="transcript">
                    Transcript: <input type="file" id="transcript" disabled className="w-full sm:w-[30%] font-medium bg-transparent outline-none file:mr-2 file:text-blue-700" />
                  </label>
                </div>
              </div>

              {/* SUPPORTING DOCUMENTS */}
              <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 sm:px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-xl sm:text-2xl">Supporting Documents</h3>
                  <button type="button" className="inline-flex cursor-pointer items-center gap-2 text-xl sm:text-2xl font-medium text-blue-700">
                    Edit <FaRegEdit className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-base sm:text-lg">
                  <label htmlFor="recommendationLetter">
                    Recommendation Letter: <input type="file" id="recommendationLetter" disabled className="w-full sm:w-[30%] font-medium bg-transparent outline-none file:mr-2 file:text-blue-700" />
                  </label>
                  <label htmlFor="passport">
                    Passport Photograph: <input type="file" id="passport" disabled className="w-full sm:w-[30%] font-medium bg-transparent outline-none file:mr-2 file:text-blue-700" />
                  </label>
                  <label htmlFor="personalStatement">
                    Personal Statement: <input type="file" id="personalStatement" disabled className="w-full sm:w-[30%] font-medium bg-transparent outline-none file:mr-2 file:text-blue-700" />
                  </label>
                  <label htmlFor="additionalDocuments">
                    Additional Documents: <input type="file" id="additionalDocuments" disabled className="w-full sm:w-[30%] font-medium bg-transparent outline-none file:mr-2 file:text-blue-700" />
                  </label>
                </div>
              </div>

              {/* STATEMENT OF PURPOSE */}
              <div className="mt-16 max-w-3xl space-y-12 bg-gray-100 px-4 sm:px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-xl sm:text-2xl">Statement of Purpose</h3>
                  <button type="button" className="inline-flex cursor-pointer items-center gap-2 text-xl sm:text-2xl font-medium text-blue-700">
                    Edit <FaRegEdit className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-base sm:text-lg">
                  <textarea
                    rows={10}
                    defaultValue="My journey into Computer Science began in high school, where I led a STEM club project aimed at solving real-world challenges through practical innovation. Alongside my team, we designed and built a basic irrigation system using moisture sensors to help a small farming community conserve water during the dry season. As the team lead, I oversaw the design process, gathered feedback from local farmers, and presented our solution at a school-wide science fair. This hands-on experience ignited my passion for technology and opened my eyes to its potential to create meaningful change—particularly in underserved areas.
Motivated by that early exposure, I have remained committed to pursuing Computer Science as a pathway to drive social impact. Currently, I am an undergraduate student maintaining a 3.6 GPA, with completed coursework and projects in areas such as programming, data analysis, and systems design. I’ve also contributed to group research initiatives exploring how machine learning can enhance public service delivery—further strengthening my resolve to use technology to improve lives in Ghana.
Despite my dedication, financial limitations have posed ongoing challenges, making it difficult at times to access the tools and resources necessary to thrive. The Ghana STEM Excellence Scholarship represents far more than financial aid—it is an opportunity to focus fully on innovation, research, and growth without the burden of economic constraints. With this support, I will be able to engage deeply in research, explore emerging technologies, and develop solutions aligned with Ghana’s development goals.
I believe the most effective innovations come from individuals who understand the needs of their communities and are driven to make a difference. I am committed to leveraging my education not only for personal advancement but to create inclusive, tech-driven solutions in areas like education, agriculture, and public health. From building smarter systems for schools in rural regions to developing digital tools that make government services more efficient, I envision technology as a bridge to a better future for all.
Receiving this scholarship would allow me to stay on this path, deepen my expertise, and grow into one of the STEM leaders shaping Ghana’s future. I am sincerely grateful for the opportunity to apply and confident that, with your support, I can transform my passion into lasting impact."
                    readOnly
                    className="w-full rounded-md border-2 border-gray-300 p-4 bg-transparent outline-none placeholder:text-pretty"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[390px] space-y-8">
            <div className="inline-flex flex-col gap-4 text-lg sm:text-xl font-bold">
              <button type="button" className="bg-blue-700 px-8 sm:px-12 py-3.5 text-white">
                Save Progress
              </button>
              <a href="/" className="inline-flex justify-center border-2 border-blue-700 px-8 sm:px-12 py-3.5 text-blue-700">
                Back to Homepage
              </a>
            </div>
            <div>
              <p className="flex gap-3 text-lg sm:text-xl text-blue-700">
                <CiCircleInfo className="text-2xl sm:text-3xl" />
                <span className="font-normal">Note: Applications close on 26th March 2025</span>
              </p>
            </div>
          </div>
        </form>

        <div className="max-w-3xl">
          <label htmlFor="confirm" className="flex items-center gap-8 text-base sm:text-lg">
            <input
              type="checkbox"
              id="confirm"
              className="size-6 sm:size-8 accent-blue-500"
              onChange={handleCheckboxChange}
              checked={isConfirmed}
            />
            I confirm that all information provided is accurate and I agree to the Ghana STEM Excellence Scholarship terms and conditions
          </label>
        </div>
      </div>

      <div className="my-24 flex justify-between px-2">
        <a
          href="/portalStep4"
          className="inline-flex items-center gap-4 rounded-lg bg-blue-700 px-6 sm:px-8 py-2 text-lg sm:text-xl font-medium text-white"
        >
          <GoChevronLeft className="text-lg sm:text-xl" /> Back
        </a>

        <button
          type="submit"
          form="step5Form"
          disabled={!isConfirmed}
          className={`inline-flex items-center gap-4 rounded-lg px-6 sm:px-8 py-2 text-lg sm:text-xl font-medium text-white ${
            isConfirmed ? "bg-blue-400 hover:bg-blue-500" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Application
        </button>
      </div>
    </section>
  );
}