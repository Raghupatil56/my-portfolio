import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const hour = new Date().getHours();
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    else if (hour >= 17 && hour < 21) greeting = "Good Evening";
    else if (hour >= 21 || hour < 5) greeting = "Good Night";

    return (
        <nav className="glass-effect text-white p-4 fixed w-full top-0 left-0 z-50 border-b border-white/10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Greeting */}
                <h1 className="text-xl md:text-2xl font-bold font-serif text-white">Hello! {greeting}</h1>

                <div className="hidden md:flex space-x-8 font-bold text-lg">
                    <Link to="my-portfolio/" className="hover:text-purple-400 transition-colors duration-300 relative group">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link to="my-portfolio/Projectss" className="hover:text-purple-400 transition-colors duration-300 relative group">
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link to="my-portfolio/Contact" className="hover:text-purple-400 transition-colors duration-300 relative group">
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </div>

                <button 
                    className="md:hidden text-2xl hover:text-purple-400 transition-colors duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col glass-effect py-4 mt-4 rounded-lg">
                    <Link to="my-portfolio/" className="py-3 hover:bg-white/10 text-center transition-all duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="my-portfolio/Projectss" className="py-3 hover:bg-white/10 text-center transition-all duration-300" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="my-portfolio/Contact" className="py-3 hover:bg-white/10 text-center transition-all duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
