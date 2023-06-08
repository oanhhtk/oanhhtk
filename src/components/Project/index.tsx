import { PROJECT_DATA } from "@/data";
import CardItem from "../CardItem";
import Title from "@/Title";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => (
  <>
    <div
      data-aos="fade-in"
      data-aos-delay="450"
      id="project"
      className="scroll-page bg-[#DBDFEA] pb-[100px] flex-col items-center"
    >
      <Title
        title="Pet Project"
        className="mx-6 mt-8"
        aosAnimation={{
          "data-aos": "fade-out",
          "data-aos-delay": "300",
        }}
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 h-full">
        {PROJECT_DATA.map((data, i) => (
          <CardItem key={data.id} data={data} index={i} />
        ))}
      </div>
    </div>
  </>
);

export default Project;
