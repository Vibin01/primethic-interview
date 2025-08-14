import Image from "next/image";
import React from "react";
import BehavioralScienceSection from "./BehavioralScienceSection";
import PredictiveInterviewSection from "./PredictiveInterviewSection";
import ConnectECSection from "./ConnectECSection";
import PriceTag from "./PriceTag";

const HeroSection = () => {
  return (
    <section className=" md:px-[7%]   relative overflow-hidden  ">
      {/* Left Content */}
      <div
        className="bg-[#0668E166] rounded-full h-[300px] w-[450px] absolute left-0 top-[220px] backdrop-blur-[600px]  shadow-[00px_0px_290px_250px_#0668E166] opacity-[40%]"
        style={{
          // backdropFilter: "blur(600px)",
          zIndex: -1,
        }}
      />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-[#FFFFFF5D] -mx-[10%]  py-[10%] gap-[3%]">
        <div className="max-w-[50%] ">
          <h2 className="text-2xl md:text-[40px] font-normal text-[#1B1C17] mb-2">
            Interview Scheduling –{" "}
            <span className="text-[#0668E1] font-medium">
              Prediction Platform?
            </span>
          </h2>
          <h1 className="text-2xl md:text-[40px] font-bold mb-6">
            Absolutely, Yes!
          </h1>
          <p className="text-[#1B1C17] max-w-[85%] text-[24px] font-medium  mb-8 ">
            <span className="font-bold">Connect EC</span> is a gamified ethical
            hiring platform that streamlines interview scheduling. EC transforms
            potential no-shows into &quot;know-shows&quot; by anticipating and
            predicting drop-offs— behavioral insights that improve scheduling,
            minimize disruptions, and keep hiring on track.
          </p>
          <button className="px-6 py-3 mt-4 text-[24px] font-bold h-[80px] w-[320px] bg-[linear-gradient(90deg,#004CAC_0%,#006AE9_50%,#0074FF_100%)] text-white rounded-full  hover:bg-blue-700 transition">
            Download EC for Free
          </button>
        </div>

        {/* Right Image */}
        <div className="max-w-[50%]  ">
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
