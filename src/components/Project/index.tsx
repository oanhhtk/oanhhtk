import CardItem from "../CardItem";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => (
  <>
    <div
      data-aos="fade-in"
      data-aos-delay="700"
      id="project"
      className="scroll-page bg-blue-200 pb-[100px]"
    >
      <div className="grid grid-cols-3 gap-4 max-w-[1240px] h-full">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  </>
);

export default Project;
