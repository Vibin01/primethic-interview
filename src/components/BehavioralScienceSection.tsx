// components/BehavioralScienceSection.tsx
"use client";
import { act, useState } from "react";

export default function BehavioralScienceSection() {
  const tabs = [
    {
      tab: "Behavioral Consistency Theory",

      activeImage: "/BehavioralSection/behavioral-white.png",
      inactiveImage: "/BehavioralSection/behavioral-black.png",
      heading:
        "Past behavior influences future actions through processes like habit and intention.",
      content:
        "To identify potential drop-outs, the No-Show Predictor analyzes a candidate's past attendance, engagement trends, and current response to forecast their future behavior.",
      author: "Judith A. Ouellette & Wendy Wood",
    },
    {
      tab: "Signal Theory",
      activeImage: "/BehavioralSection/signal-white.png",
      inactiveImage: "/BehavioralSection/signal-black.png",

      heading:
        "Signal Theory emphasizes the importance of signals in communication.",
      content:
        "In the context of hiring, it helps understand how candidates signal their intentions through their actions.",
      author: "Judith A. Ouellette & Wendy Wood",
    },
    {
      tab: "Nudge Theory",
      activeImage: "/BehavioralSection/nudge-white.png",
      inactiveImage: "/BehavioralSection/nudge-black.png",

      heading:
        "Nudge Theory suggests that subtle changes in the environment can influence behavior.",
      content:
        "In hiring, nudges can help candidates stay committed to their interview schedules.",
      author: "Judith A. Ouellette & Wendy Wood",
    },
    {
      tab: "Social Influence Theory",
      activeImage: "/BehavioralSection/commitment-white.png",
      inactiveImage: "/BehavioralSection/commitment-black.png",

      heading:
        "Social Influence Theory suggests that social connections can influence behavior.",
      content:
        "In hiring, social influence theory can help candidates stay committed to their interview schedules.",
      author: "Judith A. Ouellette & Wendy Wood",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].tab);

  return (
    <section className="py-16 relative text-[#1B1C17]  ">
      <div
        className="bg-[#0668E166] rounded-full h-[150px] w-[150px] absolute right-1/6 top-[70px] backdrop-blur-[800px]  shadow-[00px_0px_290px_250px_#0668E166] opacity-[16%]"
        style={{
          // backdropFilter: "blur(600px)",
          zIndex: -1,
        }}
      />
      <div className="  mx-auto text-center">
        <h2 className="text-2xl md:text-[48px] font-bold my-12">
          Powered by Established Behavioral Science
        </h2>

        {/* Tabs */}
        <div className="bg-[#FFFFFF1A] h-[450px] p-10 shadow-[0px_0px_10px_0px_#0668E11A] rounded-[40px]  flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* Active Tab */}
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab.tab)}
              className={`flex flex-col items-center justify-center gap-2 px-6 py-4 w-[260px]  shadow-[0px_0px_4px_0px_#0668E14D] h-[140px] ${
                activeTab === tab.tab
                  ? "bg-[#0668E1] text-white font-bold"
                  : "text-black font-semibold"
              }  rounded-[20px] text-[20px] cursor-pointer`}
            >
              {tab.tab}

              {activeTab === tab.tab ? (
                <img
                  src={tab.activeImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              ) : (
                <img
                  src={tab.inactiveImage}
                  alt={tab.tab}
                  className="object-contain"
                />
              )}
            </div>
          ))}
          {activeTab && (
            <div className="w-full text-center mt-4">
              <p className="text-[28px] text-[#0668E1] italic font-extrabold my-6">
                {tabs.find((tab) => tab.tab === activeTab)?.heading}
              </p>
              <p className="text-[22px] font-medium my-6 h-[60px]">
                {tabs.find((tab) => tab.tab === activeTab)?.content}
              </p>
              <p className="text-[32px] text-[#1B1C17] italic font-extrabold">
                {tabs.find((tab) => tab.tab === activeTab)?.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
