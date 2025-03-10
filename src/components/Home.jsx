import { useState, useEffect } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const checkMobileAndDesktopSite = () => {
      const isMobile = /Mobi|Android|iPhone|iPad/.test(navigator.userAgent);
      const isDesktopSite = window.innerWidth >= window.screen.width - 20; // Detects "Desktop Site" mode

      if (isMobile && !isDesktopSite) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    };

    checkMobileAndDesktopSite();
    window.addEventListener("resize", checkMobileAndDesktopSite);

    return () => window.removeEventListener("resize", checkMobileAndDesktopSite);
  }, []);

  return (
    <>
      {showAlert && (
        <div className="bg-red-600 text-white text-center p-3 fixed top-0 w-full z-50">
          ⚠️ Please enable "Desktop Site" in your browser (Chrome/Safari) for the best experience.
        </div>
      )}

      <section className="h-screen pt-20 text-center">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <div className="p-7 m-6 w-1/2 text-left">
            <div className="text-7xl font-bold mb-7">Raghavendra Patil</div>
            <div className="text-xl font-bold">
              I am an enthusiastic and diligent final-year B.Tech student in Electronics and Communication Engineering, with a strong passion for software development and emerging technologies.
              <br />With expertise in Java, SQL, Python, and full-stack development, I am eager to apply my knowledge in a dynamic work environment to develop innovative solutions.
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
    </>
  );
};

export default Home;
