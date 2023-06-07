import Company from "./components/Company";
import Job from "./components/Job";

interface WorkExperienceProps {
  data: WorkExperienceDataType[];
}
//bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800
const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <div
      id="work-experience"
      className="scroll-page flex justify-between items-center m-1 h-full w-full mb-[100px] "
    >
      {data?.map((cp, idx) => (
        <div key={idx}>
          <div className="max-w-[1240px] flex justify-center items-start gap-3 mt-4 rounded-3xl p-px ">
            <div className="flex items-start gap-10 rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
              <Company
                companyName={cp.company}
                position={cp.position}
                className="col-span-12 sm:col-span-3"
                aosAnimation={{
                  "data-aos": "fade-in",
                  "data-aos-delay": "700",
                }}
              />
              <Job
                projectList={cp.projectJoineds}
                aosAnimation={{
                  "data-aos": "fade-in",
                  "data-aos-delay": "700",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
