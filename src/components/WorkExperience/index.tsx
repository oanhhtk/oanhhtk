import React from "react";
import Company from "./components/Company";
import Job from "./components/Job";
import Title from "@/Title";

interface WorkExperienceProps {
  data: Partial<WorkExperienceDataType>[];
}
//bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800
const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <div
      id="work-experience"
      className="m-1 h-full mb-[40px] bg-[#F8F6F4] p-3 "
    >
      <Title
        title="Work experience"
        className="mx-6 mt-3"
        aosAnimation={{
          "data-aos": "fade-right",
          "data-aos-delay": "300",
        }}
      />
      <div className="py-6">
        <div className="grid grid-rows-3 grid-flow-col gap-4  p-3">
          {data?.map((cp, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? (
                <div className="row-span-3 p-3">
                  <div className="flex items-start gap-10 rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                    <Company
                      companyName={cp.company}
                      position={cp.position}
                      startDate={cp?.startDate}
                      className="col-span-12 sm:col-span-3"
                      aosAnimation={{
                        "data-aos": "fade-right",
                        "data-aos-delay": "200",
                      }}
                    />
                    <Job
                      projectList={cp.projectJoineds}
                      aosAnimation={{
                        "data-aos": "fade-in",
                        "data-aos-delay": "250",
                      }}
                    />
                  </div>{" "}
                </div>
              ) : (
                <div className="col-span-2 p-3">
                  <div className="flex items-start gap-10 rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                    <Company
                      companyName={cp.company}
                      position={cp.position}
                      startDate={cp?.startDate}
                      className="col-span-12 sm:col-span-3"
                      aosAnimation={{
                        "data-aos": "fade-in",
                        "data-aos-delay": "300",
                      }}
                    />
                    <Job
                      projectList={cp.projectJoineds}
                      aosAnimation={{
                        "data-aos": "fade-in",
                        "data-aos-delay": "300",
                      }}
                    />
                  </div>
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
