import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h2 className="text-5xl font-bold mb-8">Contact Me</h2>

      {/* Contact Details */}
      <div className="border-4 border-white p-6 rounded-lg shadow-md w-4/5 max-w-lg">
        <p className="text-2xl font-bold mb-4"> 
          <a 
            href="mailto:raghavendrapatil309@gmail.com" 
            className="text-white hover:text-3xl ml-2"
          >
            📧 Email
          </a>
        </p>

        <p className="text-2xl font-bold mb-4">
          📞 Phone: 
          <a 
            href="tel:+918431414698" 
            className="text-white hover:text-3xl ml-2"
          >
            +91 8431414698
          </a>
        </p>

        <p className="text-2xl font-bold mb-4">
          <a 
            href="https://www.linkedin.com/in/raghupatil309/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-3xl ml-2"
          >
            🔗 LinkedIn
          </a>
        </p>

        <p className="text-2xl font-bold mb-4">
          <a 
            href="https://github.com/Raghupatil56" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-3xl ml-2"
          >
            💻 GitHub
          </a>
        </p>

        <p className="text-2xl font-bold">
          <a 
            href="/my-portfolio/Raghavendr Patil Resume.pdf" 
            download 
            className="text-white hover:text-3xl ml-2"
          >
            📄 Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
