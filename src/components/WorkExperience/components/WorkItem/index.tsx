import { useState } from "react";
import Company from "../Company";
import Job from "../Job";

interface WorkItemProps {
  item: Partial<WorkExperienceDataType>;
}

const WorkItem: React.FC<WorkItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="200"
      className="flex flex-col lg:items-start  gap-10 lg:rounded-[calc(1.5rem-1px)] lg:p-10 bg-white dark:bg-gray-900 p-[14px]"
    >
      <Company
        companyName={item.company}
        position={item.position}
        startDate={item?.startDate}
        className="col-span-12 sm:col-span-3"
        aosAnimation={{
          "data-aos": "fade-right",
          "data-aos-delay": "200",
        }}
        onToggle={() => {
          if (item.projectJoineds?.length) setExpanded((prev) => !prev);
        }}
      />
      <div
        id="content"
        className={`content overflow-hidden grid duration-300 max-h-screen overflow-y-auto md:max-h-[100%] md:overflow-unset md:grid-rows-1`}
        style={{
          gridTemplateRows: expanded ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0 bg-white rounded-b-sm  ">
          <div className="px-3 lg:px-8 py-4 leading-relaxed">
            <Job
              projectList={item.projectJoineds}
              // aosAnimation={{
              //   "data-aos": "fade-in",
              //   "data-aos-delay": "250",
              // }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
