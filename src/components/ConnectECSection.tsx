export default function ConnectECSection() {
  return (
    <section className="relative py-32 px-6 bg-[#FFFFFF1A] -mx-[10%] ">
      <div
        className="bg-[#0668E14D] rounded-full h-[150px] w-[150px] absolute right-1/6 bottom-1/3   shadow-[00px_0px_310px_250px_#0668E14D] opacity-[20%]"
        style={{
          backdropFilter: "blur(800px)",
          zIndex: -1,
        }}
      />
      <div className=" mx-auto px-[10%]">
        <div className="bg-[#FFFFFF1A] rounded-[40px] shadow-[0px_0px_4px_0px_#0668E14D] border border-gray-200 p-10  text-center relative">
          {/* Heading with capsule style */}
          <div className="absolute z-20 -top-8 left-1/2 -translate-x-1/2">
            <span className="bg-white rounded-[40px] border border-gray-200  px-20 py-2 text-[40px] font-extrabold text-[#0668E1] shadow-[0px_2px_4px_0px_#0668E14D]">
              Connect EC
            </span>
          </div>

          {/* Subheading */}
          <h3 className="text-[32px] italic font-[#1B1C17] font-extrabold my-8">
            Interview Scheduling-Prediction Platform
          </h3>

          {/* Description */}
          <p className="text-[#1B1C17] text-[24px] font-medium  leading-relaxed mb-5">
            The No-Show Predictor does more than schedule interviews—it
            anticipates, prevents, and enables action before no-shows happen.
            This feature empowers recruiters to turn uncertainty into confidence
            and wasted time into efficient hiring. With the No-Show Predictor,
            recruiters stop chasing no-shows, boost interview attendance, and
            keep hiring on track—no last-minute chaos and empty slots, just
            precision-powered scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
