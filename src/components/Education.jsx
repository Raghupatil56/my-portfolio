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
        <div className="mt-24 w-11/12 mx-auto text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center text-white">Education</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>
            
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educationDetails.map((edu, index) => (
                    <div key={index} className="glass-effect rounded-2xl p-6 shadow-2xl text-white card-hover group relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <p className="text-xl font-bold text-blue-400 mb-2">{edu.institution}</p>
                            <p className="text-base text-gray-300 mb-3">{edu.location}</p>
                            <p className="text-lg font-semibold text-white mb-2">{edu.degree}</p>
                            <p className="text-base text-gray-400 mb-2">{edu.duration}</p>
                            {edu.cgpa && <p className="text-lg font-bold text-green-400">{edu.cgpa}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
