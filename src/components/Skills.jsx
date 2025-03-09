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
        <div ref={ref} className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-6xl font-bold mb-5 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-14">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="flex justify-center items-center text-3xl border-4 rounded-2xl p-8 mx-auto w-96 text-center"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, delay: index * 0.07 }}
                    >
                        {skillLinks[skill] ? (
                            <a 
                                href={skillLinks[skill]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white"
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
