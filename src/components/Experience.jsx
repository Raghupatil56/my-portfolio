import { Link } from "react-router-dom";

const Experience = () => {
    const experienceDetails = [
        {
            Company: "Prodigy Info Tech",
            title: "Data Science Intern",
            timeline: "Feb 2025 - Apr 2025",
            description: <p>
                Currently I am working as a Data Science Intern at Prodigy Info Tech (Feb 2025 - Apr 2025). I am working on multiple real-world datasets, applying data analysis, machine learning, and visualization techniques. My key projects include Distribution Analysis and Visualization on a Population Dataset, where I explore population trends and Data Cleaning and Exploratory Data Analysis (EDA) on the Titanic Dataset, ensuring data quality and extracting insights. <br />I am also implementing a Decision Tree Classifier on a Bank Marketing Dataset, predicting customer responses based on marketing strategies and conducting Sentiment Analysis and Visualization of Social Media Data, analyzing user opinions using natural language processing techniques. <br />This internship is enhancing my proficiency in Python, data preprocessing, machine learning algorithms and data visualization using libraries like Pandas, NumPy and Matplotlib. Additionally, it is improving my problem-solving and analytical skills, helping me understand real-world data challenges. <br />Overall, this experience is strengthening my foundation in data science and machine learning, preparing me for more advanced roles in the field while giving me hands-on exposure to industry-level data-driven decision-making.
            </p>,
        },
    ];
    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-6xl font-bold mb-5 text-center">Experience</h2>
            <div className=" items-center mt-14">
                {experienceDetails.map((pro, index) => (
                    <div key={index} className="mb-4 p-8">
                        <p className="text-2xl font-bold">{pro.Company}</p>
                        <p className="text-2xl font-bold">{pro.title}</p>
                        <p className="text-2xl font-bold">{pro.timeline}</p>
                        <p className=" text-xl font-semibold">{pro.description}</p>
                        {index !== experienceDetails.length - 1 && (
                            <hr className="w-1/2 mx-auto border-2 border-white mt-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Experience;
