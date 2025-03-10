import { Link } from "react-router-dom";

const Navbar = () => {
    const hour = new Date().getHours();

    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
    } else if (hour >= 21 || hour < 5) {
        greeting = "Good Night";
    }

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold font-serif">Hello! {greeting}</h1>
                <div className="flex justify-between items-center space-x-8 font-bold text-2xl">
                    <Link to="my-portfolio/" className="hover:text-gray-400">Home</Link>
                    <Link to="my-portfolio/Projectss" className="hover:text-gray-400">Projects</Link>
                    <Link to="my-portfolio/Contact" className="hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

