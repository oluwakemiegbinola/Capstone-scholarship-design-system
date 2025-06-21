import { CiCircleInfo } from "react-icons/ci";
import GETImage from "../assets/image/portal4/image/get.png";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4Colour.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5.svg";
import LogoBg from "../assets/image/portal4/svg/logobg.svg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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
                <div className="absolute z-10 h-full w-[70%] rounded-full bg-blue-700"></div>
              </div>
              <span className="font-bold text-blue-700">In Progress</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="size-full space-y-24">
            {/* STEP 4: WRITE YOUR STATEMENT OF PURPOSE */}
            <div className="size-full space-y-2">
              <div className="space-y-2">
                <div className="flex w-[80%] items-center justify-between">
                  <p className="text-2xl">
                    <span className="font-bold">Step 4 :</span> Wite your
                    Statement of Purpose
                  </p>

                  <div>
                    <img src={LogoBg} alt="Logo Background" />
                  </div>
                </div>

                <p className="text-lg text-gray-700">
                  Tell us about your goals, what you’ve achieved so far, and why
                  you’re a great fit for this scholarship.
                </p>
              </div>

              <div className="h-0.5 w-[80%] bg-gray-300"></div>

              <div className="space-y-4">
                <p className="text-2xl">
                  <span className="font-bold">Section 1 :</span> Write your
                  statement of purpose below{" "}
                  <span className="text-xl">(minimum of 2000 words)</span>
                </p>

                <textarea
                  rows={20}
                  placeholder="I am applying for the Ghana STEM Excellence Scholarship because I am passionate about using technology to solve real-world problems…"
                  className="w-[80%] rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                ></textarea>
              </div>
            </div>

            {/* SECTION 2: CAPSTONE AI ASSISTANT */}
            <div className="size-full space-y-8">
              <div className="space-y-2">
                <p className="text-2xl">
                  <span className="font-bold">Section 2 :</span> Capstone AI
                  Assistant
                </p>
                <p className="text-lg text-gray-700">
                  Let our Capstone AI assistant draft a personalised version for
                  you using your earlier uploaded documents.
                </p>
              </div>

              <div className="h-0.5 w-[80%] bg-gray-300"></div>

              <div className="space-y-4">
                <p className="text-2xl">
                  Tell us what you want your statement of purpose to highlight
                </p>

                <div className="relative">
                  <textarea
                    rows={10}
                    placeholder='" e.g. Please focus on my academic challenges and my goal to work in AI ethics. "'
                    className="w-[80%] rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                  ></textarea>

                  <button className="absolute right-63 bottom-5 rounded-lg bg-blue-400 px-4 py-2 text-gray-100">
                    Generate with AI
                  </button>
                </div>
              </div>

              <p className="w-[80%] text-blue-700">
                <span className="font-bold">Please note :</span> Any statement
                generated by Capstone AI will be clearly labelled and
                added below your original writing - your original text won’t be
                lost. Capstone AI only uses the documents you’ve uploaded to
                create helpful suggestions that reflect your story.
              </p>
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
      </div>

      <div className="my-24 flex justify-between px-2">
        <a
          href="/step3"
          className="inline-flex items-center gap-4 rounded-lg bg-blue-700 px-8 py-2 text-xl font-medium text-white"
        >
          <span className="text-xl">
            <GoChevronLeft />
          </span>{" "}
          Back
        </a>

        <a
          href="/portalStep5"
          className="inline-flex items-center gap-4 rounded-lg bg-blue-400 px-8 py-2 text-xl font-medium text-white"
        >
          Next
          <span className="text-xl">
            <GoChevronRight />
          </span>{" "}
        </a>
      </div>
    </section>
  );
}