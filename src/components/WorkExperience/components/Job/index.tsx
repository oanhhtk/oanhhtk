export interface IJobProps {
  projectList: ProjectItem[];
  aosAnimation: Record<string, any>;
  className: string;
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Job({
  projectList,
  aosAnimation,
  className,
}: Partial<IJobProps>) {
  return (
    <div {...aosAnimation} className={className}>
      <ol>
        {projectList?.map((item, i) => (
          <div key={i}>
            {i === 0 ? (
              <li className="border-l-2 border-purple-600">
                <div className="md:flex flex-start gap-1">
                  <div className="bg-purple-600 w-6 h-6 p-1 flex items-center justify-center rounded-full -ml-3.5">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      width={20}
                      height={20}
                      color="#FFF"
                    />
                  </div>
                  <div className="block p-3 min-w-[100%] rounded-lg shadow-lg bg-gray-100 max-w-md lg:mx-3 mb-10">
                    <div className="flex justify-between mb-4">
                      <a
                        href="#!"
                        className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {item?.name || "tess"}
                      </a>
                      <a
                        href="#!"
                        className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {/* {item?.date} */}
                      </a>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.longDescriptions,
                      }}
                    />
                  </div>
                </div>
              </li>
            ) : (
              <li className="border-l-2 border-green-600">
                <div className="md:flex flex-start gap-1">
                  <div className="bg-green-600 w-6 h-6 p-1 flex items-center justify-center rounded-full -ml-3.5">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      width={20}
                      height={20}
                      color="#FFF"
                    />
                  </div>
                  <div className="block p-3 min-w-[100%] rounded-lg shadow-lg bg-gray-100 max-w-md lg:mx-3 mb-10">
                    <div className="flex justify-between mb-4">
                      <a
                        href="#!"
                        className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {item?.name || "tess"}
                      </a>
                      <a
                        href="#!"
                        className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {/* {item?.date} */}
                      </a>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.longDescriptions,
                      }}
                    />
                  </div>
                </div>
              </li>
            )}
          </div>
        ))}
      </ol>
    </div>
  );
}
