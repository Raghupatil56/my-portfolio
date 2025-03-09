const Education = () => {
    const educationDetails = [
        {
            institution: "M S Ramaiah University Of Applied Sciences",
            location: "Bangalore, Karnataka 560054",
            degree: "B.Tech in Electronics and Communication",
            duration: "Dec 2021 - Jun 2025",
            cgpa: "CGPA: 8.15",
        },
        {
            institution: "Sachethan PU Science College",
            location: "Hubballi, Karnataka 580021",
            degree: "Pre-University - PCMB",
            duration: "Jun 2018 - May 2020",
            cgpa: "Percentage: 80.00%",
        },
        {
            institution: "Rainbow Residential Public School",
            location: "Ranebennur, Karnataka 581115",
            degree: "ICSE - 10th",
            duration: "Jun 2017 - Mar 2018",

        },
    ];
    return (
        <div className="mt-16 w-11/12 mx-auto text-left">
            <h2 className="text-6xl font-bold mb-5 text-center">Education</h2>
            <div className="flex justify-between items-center mt-14">
                {educationDetails.map((edu, index) => (
                    <div key={index} className="mb-4 border-4  rounded-2xl p-8">
                        <p className="text-xl font-semibold">{edu.institution}</p>
                        <p className="text-xl font-semibold">{edu.location}</p>
                        <p className=" text-xl font-semibold">{edu.degree}</p>
                        <p className=" text-xl font-semibold">{edu.duration}</p>
                        <p className=" text-xl font-semibold">{edu.cgpa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Education;