import { CiCircleInfo } from "react-icons/ci";
import GETImage from "../assets/image/portal4/image/get.png";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4.svg";
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

                <p className="w-[80%] text-lg text-gray-700">
                  Kindly review your application carefully and ensure that the
                  information you've provided across all steps are accurate.
                  Once you have cross checked, you can submit your application
                </p>
              </div>

              <div className="h-0.5 w-[80%] bg-gray-300"></div>

              <div className="space-y-4">
                <div>
                  <p className="text-2xl">Personal Information</p>
                </div>

                <textarea
                  rows={20}
                  placeholder="I am applying for the Ghana STEM Excellence Scholarship because I am passionate about using technology to solve real-world problems…"
                  className="w-[80%] rounded-md border-2 border-gray-300 outline-none placeholder:p-4 placeholder:text-pretty"
                ></textarea>
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
      </div>

      <div className="my-24 flex justify-between px-2">
        <button className="inline-flex items-center gap-4 rounded-lg bg-blue-700 px-8 py-2 text-xl font-medium text-white">
          <span className="text-xl">
            <GoChevronLeft />
          </span>{" "}
          Back
        </button>

        <button className="inline-flex items-center gap-4 rounded-lg bg-blue-400 px-8 py-2 text-xl font-medium text-white">
          Next
          <span className="text-xl">
            <GoChevronRight />
          </span>{" "}
        </button>
      </div>
    </section>
  );
}
