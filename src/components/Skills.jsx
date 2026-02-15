import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const skills = [
        "Python",
        "SQL",
        "Java",
        "MERN Stack",
        "NumPy",
        "C#",
        ".NET",
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git",
        "Agile Methodology",
        "Problem Solving",
        "Critical Thinking",
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
        "MERN Stack": "https://www.geeksforgeeks.org/mern-stack/",
        "C#": "https://www.w3schools.com/cs/index.php",
        ".NET": "https://www.geeksforgeeks.org/c-sharp/net-tutorial/",
        "AWS": "https://www.geeksforgeeks.org/devops/aws-tutorial/",
        "Docker": "https://www.geeksforgeeks.org/devops/docker-tutorial/",
        "Kubernetes": "https://www.geeksforgeeks.org/devops/introduction-to-kubernetes-k8s/",
        "Jenkins": "https://www.geeksforgeeks.org/devops/what-is-jenkins/",
        "Git": "https://www.geeksforgeeks.org/git-tutorial/",
        "Agile Methodology": "https://www.atlassian.com/agile"
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const gradients = [
        "from-blue-500 to-cyan-500",
        "from-purple-500 to-pink-500",
        "from-green-500 to-emerald-500",
        "from-orange-500 to-red-500",
        "from-indigo-500 to-blue-500",
        "from-pink-500 to-rose-500",
    ];

    return (
        <div ref={ref} className="mt-24 w-11/12 mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">Skills</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className={`glass-effect flex justify-center items-center text-xl sm:text-2xl font-semibold text-white rounded-2xl p-6 card-hover relative overflow-hidden group cursor-pointer`}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 1.05, rotate: 2 }}
                        initial={{ opacity: 0, y: 50, rotateX: -15 }}
                        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
                        transition={{ duration: 0.3, delay: index * 0.05, type: "spring", stiffness: 100 }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        {skillLinks[skill] ? (
                        <a 
                            href={skillLinks[skill]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white z-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                        >
                            {skill}
                        </a>
                    ) : (
                        <span className="z-10">{skill}</span>
                    )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
