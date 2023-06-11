import Heading from "@/components/Heading";
import React, { useState } from "react";
import Company from "./components/Company";
import Job from "./components/Job";
import WorkItem from "./components/WorkItem";

interface WorkExperienceProps {
  data: Partial<Partial<WorkExperienceDataType>>[];
}
//bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800
const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <div
      id="work-experience"
      className="h-full m-2 sroll-page bg-[#DFE7FF] rounded-xl"
    >
      <div className="flex justify-center max-w-[1240px]">
        <Heading
          title="Work experience"
          className="text-center max-w-[1240px] w-full lg:text-left text-5xl mt-3 pt-[2.5rem] lg:pt-[3.8rem] pb-[2rem] lg:px-4 py-[2.5] bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent"
          aosAnimation={{
            "data-aos": "fade-right",
            "data-aos-delay": "300",
          }}
        />
      </div>
      <div className="py-6 px-2 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:grid lg:grid-rows-3 lg:grid-flow-col gap-4 ">
          {data?.map((cp, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? (
                <div className="lg:row-span-3 p-3 lg:max-h-[100%] lg:overflow-auto">
                  <WorkItem item={cp} />
                </div>
              ) : (
                <div className="lg:col-span-2 p-3">
                  <WorkItem item={cp} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
