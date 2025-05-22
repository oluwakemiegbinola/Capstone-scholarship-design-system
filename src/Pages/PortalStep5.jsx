import { CiCircleInfo } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import GETImage from "../assets/image/portal4/image/get.png";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4Colour.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5Colour.svg";

export default function PortalStep4() {
  const stepImages = [
    StepOneImage,
    StepTwoImage,
    StepThreeImage,
    StepFourImage,
    StepFiveImage,
  ];

  return (
    <section className="space-y-8">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-blue-600/30"></div>
        <img
          src={GETImage}
          alt="Ghana Education Trust Fund Logo"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <div className="space-y-16 px-8">
        <div className="grid size-full grid-cols-5 items-start gap-4">
          {stepImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Step ${index + 1}`}
                loading="lazy"
                className="size-full cursor-pointer object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-3xl font-medium">
            Ghana Stem Excellence Scholarship Application Form
          </p>

          <div>
            <p className="flex items-center gap-2 text-2xl text-gray-700">
              Application status :{" "}
              <div className="relative isolate h-3.5 w-75 overflow-hidden rounded-full">
                <div className="absolute size-full rounded-full bg-blue-200"></div>
                <div className="absolute z-10 h-full w-[95%] rounded-full bg-blue-700"></div>
              </div>
              <span className="font-bold text-blue-700">In Progress</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="size-full space-y-24">
            {/* Step 5: Review Application and Submit */}
            <div className="size-full space-y-4">
              <div className="space-y-2">
                <p className="text-2xl">
                  <span className="font-bold">Step 5 :</span> Review Application
                  and Submit
                </p>

                <p className="w-[80%] text-lg text-pretty text-gray-700">
                  Kindly review your application carefully and ensure that the
                  information you've provided across all steps are accurate.
                  Once you have cross checked, you can submit your application
                </p>
              </div>

              {/* PERSONAL INFORMATION */}
              <div className="mt-16 w-[80%] space-y-12 bg-gray-100 px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <p className="text-2xl">Personal Information</p>

                  <button className="inline-flex cursor-pointer items-center gap-2 text-2xl font-medium text-blue-700">
                    Edit{" "}
                    <span className="text-lg">
                      <FaRegEdit />
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-lg">
                  <label id="firstName">
                    First Name:{" "}
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Princess"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="lastName">
                    Last Name:{" "}
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Egbuna"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="DOB">
                    Date of Birth:{" "}
                    <input
                      type="text"
                      id="DOB"
                      placeholder="04-09-1997"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="mailAddress">
                    Email Address:{" "}
                    <input
                      type="mail"
                      id="mailAddress"
                      placeholder="princess.egbuna@gmail.com"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="NIN">
                    National Identity Number (NIN):{" "}
                    <input
                      type="text"
                      id="NIN"
                      placeholder="1234-5678-9012"
                      className="w-[30%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="streetAddress">
                    Street Address:{" "}
                    <input
                      type="text"
                      id="streetAddress"
                      placeholder="12 Independence Avenue"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="city">
                    City:{" "}
                    <input
                      type="text"
                      id="city"
                      placeholder="Ikeja"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="state">
                    State:{" "}
                    <input
                      type="text"
                      id="state"
                      placeholder="Lagos"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="Country">
                    Country:{" "}
                    <input
                      type="text"
                      id="Country"
                      placeholder="Nigeria"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="firstName">
                    Are you currently enrolled in a tertiary institution:{" "}
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Yes"
                      className="w-[10%] font-medium caret-blue-700 outline-none"
                    />
                  </label>
                </div>
              </div>

              {/* ACADEMIC INFORMATION */}
              <div className="mt-16 w-[80%] space-y-12 bg-gray-100 px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <p className="text-2xl">Academic Information</p>

                  <button className="inline-flex cursor-pointer items-center gap-2 text-2xl font-medium text-blue-700">
                    Edit{" "}
                    <span className="text-lg">
                      <FaRegEdit />
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-lg">
                  <label id="institutionName">
                    Institution Name:{" "}
                    <input
                      type="text"
                      id="institutionName"
                      placeholder="Babcock University"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="programOfStudy">
                    Program of Study:{" "}
                    <input
                      type="text"
                      id="programOfStudy"
                      placeholder="Computer Science"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="currentLevel">
                    Current Level:{" "}
                    <input
                      type="text"
                      id="currentLevel"
                      placeholder="300 Level"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="GPA">
                    Grade Point Average (GPA):{" "}
                    <input
                      type="mail"
                      id="GPA"
                      placeholder="3.68/5.0"
                      className="w-[70%] font-medium caret-blue-700 outline-none"
                    />
                  </label>

                  <label id="transcript">
                    Transcript:{" "}
                    <input
                      type="file"
                      id="transcript"
                      className="w-[30%] font-medium outline-none file:mr-2 file:text-blue-700"
                    />
                  </label>
                </div>
              </div>

              {/* SUPPORTING DOCUMENTS */}
              <div className="mt-16 w-[80%] space-y-12 bg-gray-100 px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <p className="text-2xl">Supporting Documents</p>

                  <button className="inline-flex cursor-pointer items-center gap-2 text-2xl font-medium text-blue-700">
                    Edit{" "}
                    <span className="text-lg">
                      <FaRegEdit />
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-lg">
                  <label id="recommendationLetter">
                    Recommendation Letter:{" "}
                    <input
                      type="file"
                      id="recommendationLetter"
                      className="w-[30%] font-medium outline-none file:mr-2 file:text-blue-700"
                    />
                  </label>

                  <label id="passport">
                    Passport Photograph:{" "}
                    <input
                      type="file"
                      id="passport"
                      className="w-[30%] font-medium outline-none file:mr-2 file:text-blue-700"
                    />
                  </label>

                  <label id="personalStatement">
                    Personal Statement:{" "}
                    <input
                      type="file"
                      id="personalStatement"
                      className="w-[30%] font-medium outline-none file:mr-2 file:text-blue-700"
                    />
                  </label>

                  <label id="additionalDocuments">
                    Additional Documents:{" "}
                    <input
                      type="file"
                      id="additionalDocuments"
                      className="w-[30%] font-medium outline-none file:mr-2 file:text-blue-700"
                    />
                  </label>
                </div>
              </div>

              {/* STATEMENT OF PURPOSE */}
              <div className="mt-16 w-[80%] space-y-12 bg-gray-100 px-8 py-6">
                <div className="flex w-full items-center justify-between">
                  <p className="text-2xl">Statement of Purpose</p>

                  <button className="inline-flex cursor-pointer items-center gap-2 text-2xl font-medium text-blue-700">
                    Edit{" "}
                    <span className="text-lg">
                      <FaRegEdit />
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-lg">
                  <textarea
                    rows={35}
                    placeholder="My journey into Computer Science began in high school, where I led a STEM club project aimed at solving real-world challenges through practical innovation. Alongside my team, we designed and built a basic irrigation system using moisture sensors to help a small farming community conserve water during the dry season. As the team lead, I oversaw the design process, gathered feedback from local farmers, and presented our solution at a school-wide science fair. This hands-on experience ignited my passion for technology and opened my eyes to its potential to create meaningful change—particularly in underserved areas.
Motivated by that early exposure, I have remained committed to pursuing Computer Science as a pathway to drive social impact. Currently, I am an undergraduate student maintaining a 3.6 GPA, with completed coursework and projects in areas such as programming, data analysis, and systems design. I’ve also contributed to group research initiatives exploring how machine learning can enhance public service delivery—further strengthening my resolve to use technology to improve lives in Ghana.
Despite my dedication, financial limitations have posed ongoing challenges, making it difficult at times to access the tools and resources necessary to thrive. The Ghana STEM Excellence Scholarship represents far more than financial aid—it is an opportunity to focus fully on innovation, research, and growth without the burden of economic constraints. With this support, I will be able to engage deeply in research, explore emerging technologies, and develop solutions aligned with Ghana’s development goals.
I believe the most effective innovations come from individuals who understand the needs of their communities and are driven to make a difference. I am committed to leveraging my education not only for personal advancement but to create inclusive, tech-driven solutions in areas like education, agriculture, and public health. From building smarter systems for schools in rural regions to developing digital tools that make government services more efficient, I envision technology as a bridge to a better future for all.
Receiving this scholarship would allow me to stay on this path, deepen my expertise, and grow into one of the STEM leaders shaping Ghana’s future. I am sincerely grateful for the opportunity to apply and confident that, with your support, I can transform my passion into lasting impact."
                    className="w-full rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[390px] space-y-8">
            <div className="inline-flex flex-col gap-4 text-xl font-bold">
              <button className="bg-blue-700 px-12 py-3.5 text-white">
                Save Progress
              </button>

              <button className="border-2 border-blue-700 px-12 py-3.5 text-blue-700">
                Back to Homepage
              </button>
            </div>

            <div>
              <p className="flex gap-3 text-xl text-blue-700">
                <span className="text-3xl">
                  <CiCircleInfo />
                </span>

                <span className="font-normal text-pretty">
                  Note: Applications closes on 26th March 2025
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[60%]">
          <label id="confirm" className="flex items-center gap-8 text-lg">
            <span className="text-3xl">
              <input
                type="checkbox"
                id="confirm"
                className="size-8 checked:bg-blue-500"
              />
            </span>
            I confirm that all information provided is accurate and I agree to
            the Ghana STEM Excellence Scholarship terms and conditions
          </label>
        </div>
      </div>

      <div className="my-24 flex justify-between px-2">
        <button className="inline-flex items-center gap-4 rounded-lg bg-blue-700 px-8 py-2 text-xl font-medium text-white">
          <span className="text-xl">
            <GoChevronLeft />
          </span>{" "}
          Back
        </button>

        <button className="inline-flex items-center gap-4 rounded-lg bg-blue-400 px-8 py-2 text-xl font-medium text-white">
          Submit Application
        </button>
      </div>
    </section>
  );
}
