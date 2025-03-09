import { Link } from "react-router-dom";

const Projects = () => {
    const educationDetails = [
        {
            title: "Lung Disease Detection Using Deep Learning Algorithms",
            timeline: "Oct 2024 - Feb 2025",
            description: <p>
                During this project, I designed and developed a Lung Disease Detection model using the Chest Xray-18 dataset and React framework. The model leverages deep learning algorithms to classify lung diseases from chest X-ray images, enhancing the accuracy of early detection.
                <br />The project involved data preprocessing, model training, and deployment, ensuring the system could efficiently analyze medical images and provide accurate predictions. Using CNN-based architectures, I optimized the model for high precision and recall. The React framework was utilized to create an interactive web-based interface, allowing users to upload X-ray images and receive diagnostic insights.
                <br />This project strengthened my skills in deep learning, computer vision and full-stack development, integrating machine learning models into a user-friendly web application. It also deepened my understanding of medical image analysis and AI-driven healthcare solutions
            </p>,
        },
        {
            title: "Brain Tumor Detection Using Machine Learning",
            timeline: "Jan 2024 - Mar 2024",
            description: <p>
                In this project, I designed and developed a Brain Tumor Detection model using the Brain Tumor MRI dataset and React framework. The model utilizes machine learning algorithms to analyze MRI scans and classify tumors, assisting in early diagnosis and treatment planning.
                <br />The project involved data preprocessing, feature extraction, and model training, ensuring accurate classification of tumor types. A web-based interface built with React allows users to upload MRI images and receive instant predictions. The integration of machine learning and web technology made the system accessible and efficient for medical professionals.
                <br />Through this project, I gained hands-on experience in image classification, data science and full-stack development, while also deepening my understanding of AI applications in healthcare.
            </p>,
        },
        {
            title: "Traffic Light Simulation",
            timeline: "Sep 2023 - Nov 2023",
            description: <p>
                I developed a Traffic Light Simulation system to replicate real-world traffic management using embedded systems and control logic. The system was designed to simulate the behavior of traffic signals, ensuring smooth vehicle movement and reducing congestion at intersections.
                <br />This project involved programming microcontrollers to control the timing of traffic lights based on predefined logic. It incorporated sensor-based automation to adjust signal timings dynamically, improving traffic flow efficiency. The simulation helped in understanding real-world traffic control mechanisms, system automation and embedded programming.
                <br />Through this project, I enhanced my knowledge of hardware-software integration, embedded systems and real-time control logic, which are crucial for designing intelligent traffic management solutions.
            </p>,
        },
        {
            title: "Patient Health Monitoring System",
            timeline: "Feb 2023 - Mar 2023",
            description: <p>
                I developed a real-time Patient Health Monitoring System using Arduino, Proteus simulation and sensors to measure heartbeat and temperature. The system continuously monitors a patient’s vital signs and provides real-time data, enabling early detection of health anomalies.
                <br />The project involved integrating biometric sensors with Arduino, processing sensor data and displaying the results on an LCD screen. Proteus simulation was used to test and optimize the circuit design before hardware implementation. The system can be further enhanced with IoT integration to transmit health data remotely for telemedicine applications.
                <br />This project strengthened my understanding of embedded systems, sensor technology and real-time health monitoring, contributing to advancements in medical electronics and patient care.
            </p>,
        },
    ];
    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-6xl font-bold mb-5 text-center">Projects</h2>
            <div className=" items-center mt-14">
                {educationDetails.map((pro, index) => (
                    <div key={index} className="mb-4 p-8">
                        <p className="text-xl font-semibold">{pro.title}</p>
                        <p className="text-xl font-semibold">{pro.timeline}</p>
                        <p className=" text-xl font-semibold">{pro.description}</p>
                        {index !== educationDetails.length - 1 && (
                            <hr className="w-1/2 mx-auto border-2 border-white mt-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
