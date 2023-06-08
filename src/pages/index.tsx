import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Project from "@/components/Project";
import WorkExperience from "@/components/WorkExperience";
import { WorkExperienceData } from "@/data";
import { Inter } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp() {
  return (
    <>
      <Header />
      <div className="">
        <div className="block h-[70px]"></div>
        <Home />
        <WorkExperience data={WorkExperienceData} />
        <Project />
        <Footer />
      </div>
    </>
  );
}
