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
  projectJoineds: ProjectItem[];
};
