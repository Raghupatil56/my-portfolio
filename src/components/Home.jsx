import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Feedback from "./Feedback";

const Home = () => {

  return (
    <section className="min-h-screen pt-28 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto gap-8">
        
        {/* Text Section */}
        <div className="p-8 w-full md:w-1/2 text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Raghavendra Patil
          </h1>

          <div className="glass-effect p-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-gray-200 leading-relaxed">
              Associate Software Engineer at Greenway Health with hands-on experience in 
              backend and frontend development, cloud deployment and DevOps practices.
              
              <br /><br />

              I specialize in building scalable applications using C# and .NET (MAUI), 
              designing RESTful APIs, developing responsive frontend components and 
              deploying solutions on AWS cloud infrastructure.

              <br /><br />

              Experienced in Docker containerization, Kubernetes orchestration, 
              and CI/CD automation using Jenkins. Passionate about building 
              efficient, reliable and production-ready software systems.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            <img
              src="/my-portfolio/Raghu.jpg"
              alt="Raghavendra Patil"
              className="relative w-64 md:w-96 lg:w-[32rem] h-auto rounded-full 
              border-4 border-white/30 shadow-2xl ring-4 ring-purple-500/30
              object-cover transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-purple-500/50"
            />
          </div>
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
