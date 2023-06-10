import { useState } from "react";
import Company from "../Company";
import Job from "../Job";

interface WorkItemProps {
  item: Partial<WorkExperienceDataType>;
}

const WorkItem: React.FC<WorkItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const handleOnToggle = () => {
    if (item.projectJoineds?.length) setExpanded((prev) => !prev);
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="200"
      className="flex flex-col lg:items-start lg:rounded-[calc(1.5rem-1px)] lg:p-10 bg-white dark:bg-gray-900 p-[14px]"
    >
      <div className="flex justify-between gap-5 items-center">
        <div
          className="md:hidden transition-all duration-300"
          onClick={handleOnToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            style={{
              rotate: !expanded ? "" : "180deg",
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <Company
          companyName={item.company}
          position={item.position}
          startDate={item?.startDate}
          className="col-span-12 sm:col-span-3"
          aosAnimation={{
            "data-aos": "fade-right",
            "data-aos-delay": "200",
          }}
          onToggle={handleOnToggle}
        />
        <div className="w-50px"></div>
      </div>

      <div
        id="content"
        className={`content overflow-hidden grid duration-300 max-h-screen overflow-y-auto md:max-h-[100%] md:overflow-unset md:grid-rows-1`}
        style={{
          gridTemplateRows: expanded ? "1fr" : "",
        }}
      >
        <div className="min-h-0 bg-white rounded-b-sm">
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
