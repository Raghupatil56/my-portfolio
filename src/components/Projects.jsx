const Projects = () => {
    const projectDetails = [
        {
            title: "Lung Disease Detection Using Deep Learning Algorithms",
            timeline: "Oct 2024 - Feb 2025",
            description: (
                <>
                    Designed and developed a Lung Disease Detection model using the Chest Xray-18 dataset and React framework. The model leverages deep learning algorithms to classify lung diseases from chest X-ray images, enhancing the accuracy of early detection.
                    <br />
                    The project involved data preprocessing, model training and deployment, ensuring the system could efficiently analyze medical images and provide accurate predictions. Using CNN-based architectures, I optimized the model for high precision and recall. The React framework was utilized to create an interactive web-based interface, allowing users to upload X-ray images and receive diagnostic insights.
                    <br />
                    This project strengthened my skills in deep learning, computer vision and full-stack development, integrating machine learning models into a user-friendly web application. It also deepened my understanding of medical image analysis and AI-driven healthcare solutions.
                </>
            ),
        },
        {
            title: "Brain Tumor Detection Using Machine Learning",
            timeline: "Jan 2024 - Mar 2024",
            description: (
                <>
                    Designed and developed a Brain Tumor Detection model using the Brain Tumor MRI dataset and React framework. The model utilizes machine learning algorithms to analyze MRI scans and classify tumors, assisting in early diagnosis and treatment planning.
                    <br />
                    The project involved data preprocessing, feature extraction and model training, ensuring accurate classification of tumor types. A web-based interface built with React allows users to upload MRI images and receive instant predictions. The integration of machine learning and web technology made the system accessible and efficient for medical professionals.
                    <br />
                    Through this project, I gained hands-on experience in image classification, data science and full-stack development, while also deepening my understanding of AI applications in healthcare.
                </>
            ),
        },
        {
            title: "Traffic Light Simulation",
            timeline: "Sep 2023 - Nov 2023",
            description: (
                <>
                    I developed a Traffic Light Simulation system to replicate real-world traffic management using embedded systems and control logic. The system was designed to simulate the behavior of traffic signals, ensuring smooth vehicle movement and reducing congestion at intersections.
                    <br />
                    This project involved programming microcontrollers to control the timing of traffic lights based on predefined logic. It incorporated sensor-based automation to adjust signal timings dynamically, improving traffic flow efficiency. The simulation helped in understanding real-world traffic control mechanisms, system automation and embedded programming.
                    <br />
                    Through this project, I strengthened my knowledge of hardware-software integration, embedded systems and real-time control logic.
                    
                </>
            ),
        },
        {
            title: "Patient Health Monitoring System",
            timeline: "Feb 2023 - Mar 2023",
            description: (
                <>
                    I developed a real-time Patient Health Monitoring System using Arduino, Proteus simulation and sensors to measure heartbeat and temperature. The system continuously monitors a patient’s vital signs and provides real-time data, enabling early detection of health anomalies.
                    <br />
                    The project involved integrating biometric sensors with Arduino, processing sensor data and displaying the results on an LCD screen. Proteus simulation was used to test and optimize circuit design before hardware implementation.
                    <br />
                    This project strengthened my expertise in embedded systems, sensor technology and real-time health monitoring, contributing to advancements in medical electronics.
                </>
            ),
        },
    ];

    return (
        <div className="mt-24 w-11/12 mx-auto text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center text-white">Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>
            <div className="mt-10 space-y-8">
                {projectDetails.map((project, index) => (
                    <div key={index} className="glass-effect rounded-2xl p-8 text-white card-hover group relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{project.title}</h3>
                            <p className="text-base text-gray-400 mb-4 flex items-center">
                                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                {project.timeline}
                            </p>
                            <p className="text-base md:text-lg mt-4 leading-relaxed text-gray-200">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
