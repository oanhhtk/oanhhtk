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
    <div className="w-full h-full">
      {/* <Header /> */}
      <div className="">
        <div className="block h-[70px]"></div>
        {/* <Home /> */}
        {/* <WorkExperience data={WorkExperienceData} /> */}
        <Project />
        <Footer />
      </div>
    </div>

    // <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
    //   <section className="w-full h-screen bg-red-200 snap-start">
    //     Section 1
    //   </section>
    //   <section className="w-full h-screen bg-blue-200 snap-start">
    //     Section 2
    //   </section>
    //   <section className="w-full h-screen bg-green-200 snap-start">
    //     Section 3
    //   </section>
    //   <section className="w-full h-screen bg-indigo-200 snap-start">
    //     Section 4
    //   </section>
    //   <section className="w-full h-screen bg-yellow-200 snap-start">
    //     Section 5
    //   </section>
    // </main>
  );
}
