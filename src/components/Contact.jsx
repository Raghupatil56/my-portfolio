import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4 py-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Contact Me</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>

      {/* Contact Details */}
      <div className="glass-effect p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md md:max-w-2xl space-y-6 border border-white/10 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <a 
          href="mailto:raghavendrapatil309@gmail.com" 
          className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold p-4 rounded-xl card-hover glass-effect group border border-white/10 relative z-10"
        >
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📧</span>
          <span className="group-hover:text-blue-400 transition-colors duration-300">raghavendrapatil309@gmail.com</span>
        </a>

        <a 
          href="tel:+918431414698" 
          className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold p-4 rounded-xl card-hover glass-effect group border border-white/10 relative z-10"
        >
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📞</span>
          <span className="group-hover:text-green-400 transition-colors duration-300">+91 8431414698</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/raghupatil309/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold p-4 rounded-xl card-hover glass-effect group border border-white/10 relative z-10"
        >
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🔗</span>
          <span className="group-hover:text-cyan-400 transition-colors duration-300">LinkedIn Profile</span>
        </a>

        <a 
          href="https://github.com/Raghupatil56" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold p-4 rounded-xl card-hover glass-effect group border border-white/10 relative z-10"
        >
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">💻</span>
          <span className="group-hover:text-purple-400 transition-colors duration-300">GitHub Profile</span>
        </a>

        <a 
          href="/my-portfolio/Raghavendr Patil Resume.pdf" 
          download 
          className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold p-4 rounded-xl card-hover bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group shadow-lg shadow-purple-500/50 relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300 relative z-10">📄</span>
          <span className="group-hover:tracking-wider transition-all duration-300 relative z-10">Download Resume</span>
        </a>
      </div>

      <p className="mt-12 text-gray-400 text-lg">Let's build something amazing together! 🚀</p>
    </div>
  );
};

export default Contact;
