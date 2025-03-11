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
        <div className="flex flex-col items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-semibold mt-4">Message Me</h2>
            <hr className="w-1/2 mx-auto border-2 border-white mt-6 mb-4" />
            <h4 className="text-lg md:text-xl">Submit the form below to get in touch with me</h4>

            <div className="flex justify-center items-center h-auto w-full">
                <form
                    action="https://getform.io/f/broyxrla"
                    method="POST"
                    className="p-6 w-full max-w-md md:max-w-lg m-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Enter your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-40 md:h-60 p-2 border-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full md:w-40 h-12 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
