import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const skills = [
        "Python",
        "SQL",
        "Java",
        "MERN Stack",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Communication",
        "Project Management",
        "Leadership"
    ];

    const skillLinks = {
        "Python": "https://www.geeksforgeeks.org/python-programming-language-tutorial/",
        "SQL": "https://www.geeksforgeeks.org/sql-tutorial/",
        "Java": "https://www.geeksforgeeks.org/java/",
        "NumPy": "https://www.geeksforgeeks.org/numpy-tutorial/",
        "Pandas": "https://www.geeksforgeeks.org/pandas-tutorial/",
        "Matplotlib": "https://www.geeksforgeeks.org/matplotlib-tutorial/",
        "MERN Stack": "https://www.geeksforgeeks.org/mern-stack/"
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className="mt-16 w-11/12 mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-white">Skills</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="flex justify-center items-center border-3 border-white text-2xl sm:text-3xl font-semibold text-white rounded-xl p-6 sm:p-8 mx-auto w-80 shadow-md"
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, delay: index * 0.07 }}
                    >
                        {skillLinks[skill] ? (
                            <a 
                                href={skillLinks[skill]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {skill}
                            </a>
                        ) : (
                            <span>{skill}</span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
