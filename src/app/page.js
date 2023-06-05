import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Options from "@/components/Options";
// import OnlineCourse, { ContextData } from "@/components/OnlineCourse";
import Courses from "@/components/Courses";
import Events from "@/components/Events";
import Image from "next/image";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Start from "@/components/Start";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-white">
      <PopularCourses/>
      <Options />
      </div>
      <Courses />
      <div className="bg-white z-10 m-auto">
        {/* <Events /> */}
        <Pricing />
        <Start />
      <div className="bg-blue-950">
      <Footer />
      <Copyright />
      </div>
      </div>
    </main>
  )
}
