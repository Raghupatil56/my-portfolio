const Experience = () => {
    const experienceDetails = [
        {
            company: "Prodigy Info Tech",
            title: "Data Science Intern",
            timeline: "Feb 2025 - Apr 2025",
            description: (
                <p>
                    Currently, I am working as a Data Science Intern at Prodigy Info Tech. I am working on real-world datasets, applying data analysis, machine learning and visualization techniques. 
                    
                    <br /><br /><strong>Key Projects:</strong>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Distribution Analysis and Visualization on a Population Dataset</li>
                        <li>Data Cleaning and EDA on the Titanic Dataset</li>
                        <li>Decision Tree Classifier on a Bank Marketing Dataset</li>
                        <li>Sentiment Analysis and Visualization of Social Media Data</li>
                    </ul>

                    <br />
                    This internship is enhancing my proficiency in Python, data preprocessing, machine learning algorithms and data visualization using Pandas, NumPy and Matplotlib. It is also improving my problem-solving and analytical skills, preparing me for industry-level data-driven decision-making.
                </p>
            ),
        },
    ];

    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">Experience</h2>
            <hr className="w-1/2 mx-auto border-3 border-gray-500 rounded-2xl mt-6 mb-4" />
            
            {/* Responsive Layout */}
            <div className="flex flex-col items-center">
                {experienceDetails.map((exp, index) => (
                    <div key={index} className="w-full lg:w-11/12  p-6  text-white mb-8">
                        <p className="text-2xl font-bold">{exp.company}</p>
                        <p className="text-xl font-semibold">{exp.title}</p>
                        <p className="text-lg font-medium">{exp.timeline}</p>
                        <div className="text-lg mt-4">{exp.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
