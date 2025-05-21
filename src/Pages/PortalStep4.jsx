import { CiCircleInfo } from "react-icons/ci";
import GETImage from "../assets/image/portal4/image/get.png";
import StepOneImage from "../assets/image/portal4/svg/step1.svg";
import StepTwoImage from "../assets/image/portal4/svg/step2.svg";
import StepThreeImage from "../assets/image/portal4/svg/step3.svg";
import StepFourImage from "../assets/image/portal4/svg/step4.svg";
import StepFiveImage from "../assets/image/portal4/svg/step5.svg";

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
          <div className="size-full space-y-8">
            <div className="space-y-2">
              <p className="text-2xl font-bold">
                Step 4 : Wite your Statement of Purpose
              </p>
              <p className="text-lg text-gray-700">
                Tell us about your goals, what you’ve achieved so far, and why
                you’re a great fit for this scholarship.
              </p>
            </div>

            <div className="h-0.5 w-[80%] bg-gray-300"></div>

            <div className="space-y-4">
              <p className="text-2xl font-bold">
                Section 1 : Write your statement of purpose bellow{" "}
                <span className="font-normal">(minimum of 2000 words)</span>
              </p>

              <textarea
                rows={20}
                placeholder="I am applying for the Ghana STEM Excellence Scholarship because I am passionate about using technology to solve real-world problems…"
                className="w-[80%] rounded-md border-2 border-gray-300 outline-none placeholder:p-4 placeholder:text-pretty"
              ></textarea>
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

                <span className="font-bold text-pretty">
                  Note: Applications closes on 26th March 2025
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
