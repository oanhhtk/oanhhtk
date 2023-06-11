type ProjectItem = {
  name: string;
  date: string;
  shortDescription: string;
  longDescriptions: string;
};

type WorkExperienceDataType = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  stydying?: boolean;
  projectJoineds: ProjectItem[];
};

type ProjectItemType = {
  id: number;
  name: string;
  image: string;
  sourceCode: string;
  liveSite: string;
  technical: string[];
  bgColor: string;
};
