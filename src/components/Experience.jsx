const Experience = () => {
    const experienceDetails = [
        {
            company: "Greenway Health",
            title: "Associate Software Engineer",
            timeline: "Dec 2025 - Present",
            description: (
                <>
                    <p>
                        Working as a full-time Associate Software Engineer contributing to 
                        healthcare software solutions. Actively involved in backend and frontend 
                        development, cloud deployment and DevOps practices.
                    </p>

                    <p className="mt-4 font-semibold">Key Responsibilities:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Designing and developing RESTful backend endpoints using C# and .NET</li>
                        <li>Building and maintaining responsive frontend components</li>
                        <li>Developing cross-platform applications using .NET MAUI</li>
                        <li>Deploying and managing applications on AWS cloud infrastructure</li>
                        <li>Containerizing services using Docker</li>
                        <li>Managing application deployments and orchestration using Kubernetes</li>
                        <li>Implementing and maintaining CI/CD pipelines using Jenkins</li>
                        <li>Collaborating within Agile teams for feature delivery and sprint planning</li>
                    </ul>
                </>

            ),
        },
        {
            company: "Greenway Health",
            title: "Software Trainee (Internship)",
            timeline: "Aug 2025 - Dec 2025",
            description: (
                <>
                    <p>
                        Completed internship focusing on backend development, frontend 
                        development, AI-driven solutions and enterprise-level application workflows.
                    </p>

                    <p className="mt-4 font-semibold">Key Learnings & Contributions:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Developed backend services using C# and .NET framework</li>
                        <li>Built and enhanced frontend components for internal applications</li>
                        <li>Worked on AI agents to automate workflows and improve system intelligence</li>
                        <li>Gained understanding of microservices architecture and containerization</li>
                        <li>Exposure to CI/CD pipelines and cloud infrastructure</li>
                        <li>Collaborated with cross-functional teams in Agile environment</li>
                    </ul>
                </>
            ),
        },

        {
            company: "Prodigy Info Tech",
            title: "Data Science Intern",
            timeline: "Feb 2025 - Apr 2025",
            description: (
                <>
                    <p>
                        Worked on real-world datasets applying data analysis, 
                        machine learning and visualization techniques.
                    </p>

                    <p className="mt-4 font-semibold">Key Projects:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Distribution Analysis and Visualization on Population Dataset</li>
                        <li>Data Cleaning and EDA on Titanic Dataset</li>
                        <li>Decision Tree Classifier on Bank Marketing Dataset</li>
                        <li>Sentiment Analysis of Social Media Data</li>
                    </ul>

                    <p className="mt-4">
                        Strengthened skills in Python, Pandas, NumPy, 
                        Matplotlib, data preprocessing and machine learning.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="mt-24 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center text-white">
                Experience
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>

            <div className="flex flex-col items-center space-y-8">
                {experienceDetails.map((exp, index) => (
                    <div
                        key={index}
                        className="w-full lg:w-11/12 p-8 text-white glass-effect rounded-2xl card-hover group relative overflow-hidden border border-white/10"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <p className="text-3xl font-bold text-white">{exp.company}</p>
                            <p className="text-xl font-semibold mt-2 text-blue-400">{exp.title}</p>
                            <p className="text-base text-gray-400 mt-2 flex items-center">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                {exp.timeline}
                            </p>
                            <div className="text-base mt-6 leading-relaxed">{exp.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
