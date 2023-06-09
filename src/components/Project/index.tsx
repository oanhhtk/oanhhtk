import Heading from "@/components/Heading";
import { PROJECT_DATA } from "@/data";
import List from "./components/List";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => (
  <div className="scroll-page">
    <div className="overflow-hidden justify-center lg:flex lg:flex-col items-center">
      <Heading
        title="Pet Project"
        className="mx-6 my-3 lg:mt-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent"
        aosAnimation={{
          "data-aos": "fade-out",
          "data-aos-delay": "300",
        }}
      />
      <div
        data-aos="fade-in"
        data-aos-delay="450"
        id="project"
        className="overflow-x-scroll m-2"
      >
        <List list={PROJECT_DATA} />
      </div>
    </div>
  </div>
);

export default Project;
