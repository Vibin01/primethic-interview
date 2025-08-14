import Image from "next/image";
import React from "react";
import BehavioralScienceSection from "./BehavioralScienceSection";
import PredictiveInterviewSection from "./PredictiveInterviewSection";
import ConnectECSection from "./ConnectECSection";
import PriceTag from "./PriceTag";

const HeroSection = () => {
  return (
    <section className=" xl:px-[7%] px-[3%]  bg-[#FFFFFF4D] relative overflow-hidden  ">
      {/* Left Content */}
      <div
        className="bg-[#0668E166] rounded-full h-[700px] w-[850px] absolute -left-40 -top-[10px] blur-[200px]  "
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#CCB0FF66] rounded-full h-[500px] w-[500px] absolute right-20 top-[220px] blur-[140px]  opacity-[100%]"
        style={{
          zIndex: -1,
        }}
      />
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#FFFFFF5D] xl:-mx-[10%] -mx-[3%] px-[3%] py-[10%] gap-[3%] ">
        <div className="xl:max-w-[50%] md:max-w-[65%] max-w-[80%] ">
          <h2 className="text-2xl xl:text-3xl 2xl:text-[40px] font-normal text-[#1B1C17] mb-2">
            Interview Scheduling –{" "}
            <span className="text-[#0668E1] font-semibold">
              Prediction Platform?
            </span>
          </h2>
          <h1 className="text-2xl  xl:text-3xl 2xl:text-[40px] font-bold mb-6">
            Absolutely, Yes!
          </h1>
          <p className="text-[#1B1C17] max-w-[85%] xl:text-[20px] 2xl:text-[24px] font-medium  mb-8 ">
            <span className="font-bold">Connect EC</span> is a gamified ethical
            hiring platform that streamlines interview scheduling. EC transforms
            potential no-shows into &quot;know-shows&quot; by anticipating and
            predicting drop-offs— behavioral insights that improve scheduling,
            minimize disruptions, and keep hiring on track.
          </p>
          <button className=" px-3 xl:px-6 py-2 xl:py-3 mt-4 text-[20px] xl:text-[24px] font-bold xl:h-[80px] xl:w-[320px] bg-[linear-gradient(90deg,#004CAC_0%,#006AE9_50%,#0074FF_100%)] text-white rounded-full  hover:bg-blue-700 transition">
            Download EC for Free
          </button>
        </div>

        {/* Right Image */}
        <div className="xl:max-w-[50%] md:max-w-[30%]   flex items-center justify-center">
          <Image
            src="/Recruiter.png"
            alt="EC Illustration"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>

      <BehavioralScienceSection />
      <PredictiveInterviewSection />
      <ConnectECSection />
      <PriceTag />
    </section>
  );
};

export default HeroSection;
