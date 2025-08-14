import React from "react";

const PriceTag = () => {
  return (
    <>
      <section className="relative py-[10%] -mx-[10%] bg-[#FFFFFF8A] flex flex-col items-center justify-center text-center gap-8">
        <div
          className="bg-[#0668E166] rounded-full h-[150px] w-[150px] absolute right-1/6 top-1/2 backdrop-blur-[800px]  shadow-[00px_0px_290px_250px_#0668E166] opacity-[30%]"
          style={{
            // backdropFilter: "blur(600px)",
            zIndex: -1,
          }}
        />
        <div
          className="bg-[#0668E166] rounded-full h-[150px] w-[150px] absolute left-1/6 top-1/2 backdrop-blur-[800px]  shadow-[00px_0px_290px_250px_#0668E166] opacity-[30%]"
          style={{
            // backdropFilter: "blur(600px)",
            zIndex: -1,
          }}
        />
        <h1 className="text-2xl md:text-[48px] text-[#1B1C17] font-bold">
          Prediction Doesn’t Have a Price Tag—It’s Priceless!
        </h1>
        <h2 className=" md:text-[32px] text-[#1B1C17] font-bold">
          That’s Why Connect EC Is Completely Free.
        </h2>
        <button className="px-6 py-3 mt-4 text-[24px] font-bold h-[80px] w-[320px] bg-[linear-gradient(90deg,#004CAC_0%,#006AE9_50%,#0074FF_100%)] text-white rounded-full  hover:bg-blue-700 transition">
          Download EC for Free
        </button>
      </section>
    </>
  );
};

export default PriceTag;
