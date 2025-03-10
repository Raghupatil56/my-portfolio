import { useEffect, useState } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the prompt has already been shown
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPrompt(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <section className="h-screen pt-20 text-center">
      {showPrompt && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold">Welcome to My Portfolio!</h2>
            <p className="text-lg mt-2">
              For the best experience, please switch to <b>Desktop Mode</b>.
            </p>
            <button
              onClick={() => setShowPrompt(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="p-7 m-6 w-1/2 text-left">
          <div className="text-7xl font-bold mb-7">Raghavendra Patil</div>
          <div className="text-xl font-bold">
            I am an enthusiastic and diligent final-year B.Tech student in
            Electronics and Communication Engineering, with a strong passion
            for software development and emerging technologies. A proactive
            learner, I have gained hands-on experience through workshops and
            academic projects, honing my problem-solving and technical skills.
            <br />
            With expertise in Java, SQL, Python, and full-stack development, I
            am eager to apply my knowledge in a dynamic work environment to
            develop innovative solutions. I am committed to continuous learning
            and professional growth, aiming to contribute effectively to
            cutting-edge technological advancements.
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="/my-portfolio/Raghu.jpg"
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
