import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  return (
    <section className="h-screen pt-20 text-center">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="p-7 m-6 w-1/2 text-left">
          <div className="text-7xl font-bold mb-7">Raghavendra Patil</div>
          <div className="text-xl font-bold">
          I am an enthusiastic and diligent final-year B.Tech student in Electronics and Communication Engineering, with a strong passion for software development and emerging technologies. A proactive learner, I have gained hands-on experience through workshops and academic projects, honing my problem-solving and technical skills.
          <br />With expertise in Java, SQL, Python, and full-stack development, I am eager to apply my knowledge in a dynamic work environment to develop innovative solutions. I am committed to continuous learning and professional growth, aiming to contribute effectively to cutting-edge technological advancements.
          </div>
        </div>
        <div className=" w-1/2 flex justify-center">
          <img
            src="/Raghu.jpg"
            alt="Raghavendra Patil"
            className="w-100 h-120 rounded-full drop-shadow-[0px_0px_80px_rgba(255,0,187,0.9)] object-cover"
          />
        </div>
      </div>
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </section>
  );
};

export default Home;
