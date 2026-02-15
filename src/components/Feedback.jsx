import { useState } from "react";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col items-center text-center px-4 py-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Message Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <h4 className="text-lg md:text-xl text-gray-300 mb-8">Submit the form below to get in touch with me</h4>

            <div className="flex justify-center items-center h-auto w-full">
                <form
                    action="https://getform.io/f/broyxrla"
                    method="POST"
                    className="glass-effect p-8 md:p-10 w-full max-w-md md:max-w-lg m-4 rounded-2xl shadow-2xl hover-lift"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl mb-6 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl mb-6 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                    />

                    <textarea
                        name="message"
                        placeholder="Enter your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-40 md:h-60 p-4 bg-white/5 border-2 border-white/20 rounded-xl mb-6 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Let's Talk 🚀</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
