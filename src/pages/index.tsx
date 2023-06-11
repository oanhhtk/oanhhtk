import Footer from "@/components/Footer";
import HeaderDesktop from "@/components/Header/HeaderDeskTop";
import HeaderMobile from "@/components/Header/HeaderMobile";
import Home from "@/components/Home";
import Project from "@/components/Project";
import WorkExperience from "@/components/WorkExperience";
import { WorkExperienceData } from "@/data";

export default function MyApp() {
  return (
    <div className="w-full h-full">
      <HeaderDesktop className="hidden lg:block" />
      <HeaderMobile className="block lg:hidden" />
      <div>
        <div className="block h-[70px]"></div>
        <Home />
        <WorkExperience data={WorkExperienceData} />
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
