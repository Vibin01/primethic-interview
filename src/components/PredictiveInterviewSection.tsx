export default function PredictiveInterviewSection() {
  const features = [
    {
      icon: "/Predictive/schedule.png",
      bgIcon: "/Predictive/1.png",
      title: "Schedule Seamless",
      desc: `EC streamlines interview scheduling through automated invites and reminders, ensuring perfect synchronization between candidates and panelists. Recruiters gain real-time control with the ability to add/remove panelists and reschedule interviews. The integrated Interview Predictor proactively identifies at-risk candidates, empowering recruiters to re-engage them or implement contingency plans, eliminating scheduling complexities.`,
    },
    {
      icon: "/Predictive/predict.png",
      bgIcon: "/Predictive/2.png",

      title: "Predict No-Shows",
      desc: `Interview Predictor leverages a gamified response model to encourage candidates to proactively update their interview status, predicting uncertainty and last-minute surprises. EC also analyzes engagement patterns to generate a predictive Score, enabling recruiters to prioritize high-intent candidates and reduce no-show risks. These intent insights enable timely interventions, thereby maintaining strong hiring momentum.`,
    },
    {
      bgIcon: "/Predictive/3.png",
      icon: "/Predictive/prevent.png",
      title: "Prevent No-Shows",
      desc: `Interview Predictor strengthens candidate commitment to interview attendance through behavior-based nudges, alerts, and gamified reminders. Each micro-interaction promotes accountability, reinforces participation, and results in a more engaged candidate pool, fewer drop-offs, and a hiring process built on trust and transparency. No-shows no longer disrupt hiring—every slot stays filled, ensuring an efficient hiring process.`,
    },
    {
      bgIcon: "/Predictive/4.png",
      icon: "/Predictive/seamless.png",
      title: "Seamless Schedules",
      desc: `Seamless schedule flow is key for flawless hiring. EC provides real-time visibility into attendance risks, empowering recruiters to manage last-minute changes proactively. By integrating behavioral insights and predictive analytics, recruiters can eliminate scheduling gaps and concentrate on securing top talent, not chasing no-shows. The outcome: optimized calendars and an effortlessly efficient hiring process.`,
    },
  ];

  return (
    <section className="py-16  relative bg-[#FFFFFF7A] xl:-mx-[10%] -mx-[3%] px-[3%]">
      <div
        className="bg-[#0668E133] rounded-full h-[600px] w-[450px] absolute right-70 -top-[150px] blur-[180px]"
        style={{
          // backdropFilter: "blur(600px)",
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#0668E133] rounded-full h-[700px] w-[400px] absolute left-40 top-[150px] blur-[200px]"
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#0668E14D] rounded-full h-[500px] w-[400px] absolute right-50 bottom-[200px] blur-[200px]"
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#CCB0FF80] rounded-full h-[500px] w-[400px] absolute right-90 top-[200px] blur-[220px]"
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#CCB0FF] rounded-full h-[300px] w-[200px] absolute left-60 top-[650px] blur-[140px]"
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#CCB0FF80] rounded-full h-[600px] w-[500px] absolute -left-10 -top-[50px] blur-[200px]"
        style={{
          zIndex: -1,
        }}
      />

      <div
        className="bg-[linear-gradient(180deg,rgba(126,105,156,0.6)_0%,rgba(209,175,255,0.06)_100%)] rounded-full h-[600px] w-[500px] absolute right-10 bottom-[250px] blur-[120px]"
        style={{
          zIndex: -1,
        }}
      />
      <div
        className="bg-[#0668E14D] rounded-full h-[400px] w-[700px] absolute left-10 bottom-[100px] blur-[200px]"
        style={{
          zIndex: -1,
        }}
      />
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="text-3xl xl:text-[48px] font-bold text-center mb-14">
          The First-Ever Predictive Interview Scheduling Platform
        </h2>

        {/* Feature List */}
        <div className="flex flex-col   gap-24 my-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col xl:flex-row relative gap-6 items-start"
            >
              <div className="xl:w-1/3 w-[100%]  flex flex-col items-center">
                <h3 className="text-[#1B1C17] text-[26px] xl:text-[28px] 2xl:text-[32px] font-bold mb-6">
                  {item.title}
                </h3>
                <div className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] shadow-[2px_4px_8px_-2px_#00000026,_-2px_-2px_0px_2px_#FFFFFF33,_0px_0px_10px_0px_#0668E126] bg-[#FFFFFF33] rounded-[30px] flex items-center justify-center ">
                  <img src={item.icon} alt="image" className="object-contain" />
                </div>
              </div>
              <img
                src={item.bgIcon}
                alt="image"
                className="hidden xl:block  absolute left-2/6 opacity-60"
              />
              {/* Text */}
              <div className="xl:w-2/3 w-[100%] flex items-center justify-center ">
                <p className="xl:max-w-2/4 max-w-3/4 text-[18px] xl:text-[22px] text-[#1B1C17] leading-relaxed text-justify xl:text-start">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
