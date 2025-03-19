import { useEffect } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Feedback from "./Feedback";

const Home = () => {

  return (
    <section className="min-h-screen pt-20 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto">
        {/* Text Section */}
        <div className="p-7 m-6 w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5">
            Seema Patil
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            I am an enthusiastic and diligent final-year B.Tech student in Electronics and Communication Engineering, with a strong passion for software development and emerging technologies. 
            <br /><br />
            With expertise in Java, SQL, Python, and full-stack development, I am eager to apply my knowledge in a dynamic work environment to develop innovative solutions. I am committed to continuous learning and professional growth, aiming to contribute effectively to cutting-edge technological advancements.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/my-portfolio/Raghu.jpg"
            alt="Raghavendra Patil"
            className="w-48 md:w-72 lg:w-96 h-auto rounded-full drop-shadow-[0px_0px_80px_rgba(255,0,187,0.9)] object-cover"
          />
        </div>
      </div>

      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Feedback />
    </section>
  );
};

export default Home;
