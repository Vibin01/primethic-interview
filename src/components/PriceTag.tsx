import React from "react";

const PriceTag = () => {
  return (
    <>
      <section className="relative py-[10%] xl:-mx-[10%] -mx-[3%] px-[3%] bg-[#FFFFFF8A] flex flex-col items-center justify-center text-center gap-8">
        <div
          className="bg-[#0668E14D] rounded-full h-[580px] w-[520px] absolute right-1 -bottom-10 blur-[120px] "
          style={{
            zIndex: -1,
          }}
        />
        <div
          className="bg-[#CCB0FF99] rounded-full h-[520px] w-[590px] absolute left-10 -bottom-5 blur-[120px] "
          style={{
            zIndex: -1,
          }}
        />
        <h1 className="text-2xl xl:text-3xl 2xl:text-[48px] text-[#1B1C17] font-bold">
          Prediction Doesn’t Have a Price Tag—It’s Priceless!
        </h1>
        <h2 className=" xl:text-3xl 2xl:text-[32px] text-[#1B1C17] font-bold">
          That’s Why Connect EC Is Completely Free.
        </h2>
        <button className=" px-3 xl:px-6 py-2 xl:py-3 mt-4 text-[20px] xl:text-[24px] font-bold xl:h-[80px] xl:w-[320px] bg-[linear-gradient(90deg,#004CAC_0%,#006AE9_50%,#0074FF_100%)] text-white rounded-full  hover:bg-blue-700 transition">
          Download EC for Free
        </button>
      </section>
    </>
  );
};

export default PriceTag;
