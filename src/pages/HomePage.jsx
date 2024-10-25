import React, { useEffect, useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the useTheme hook
import TypingEffect from '../components/TypingEffect'; // Adjust the path if necessary
import bg2 from '../assets/bg2.png';
import ExperienceSection from '../components/ExperienceSection';
import { FaDownload } from 'react-icons/fa';

const HomePage = () => {
    const { isDarkMode } = useTheme(); // Get the isDarkMode state

    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [componentContribution, setComponentContribution] = useState(0);
    const [usersGotHelp, setUsersGotHelp] = useState(0);

    useEffect(() => {
        const duration = 2000; // Duration for the countdown in milliseconds
        const incrementExperience = Math.ceil(2 / (duration / 100));
        const incrementContribution = Math.ceil(76 / (duration / 100));
        const incrementHelp = Math.ceil(250 / (duration / 100));

        let experienceCount = 0;
        let contributionCount = 0;
        let helpCount = 0;

        const interval = setInterval(() => {
            if (experienceCount < 2) {
                experienceCount += incrementExperience;
                setYearsOfExperience(Math.min(experienceCount, 2));
            }
            if (contributionCount < 76) {
                contributionCount += incrementContribution;
                setComponentContribution(Math.min(contributionCount, 76));
            }
            if (helpCount < 250) {
                helpCount += incrementHelp;
                setUsersGotHelp(Math.min(helpCount, 250));
            }
            if (experienceCount >= 2 && contributionCount >= 76 && helpCount >= 250) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Content */}
            <div className={`flex flex-col md:flex-row md:items-center p-4 h-full relative z-10 ${isDarkMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-gradient-to-r from-white via-blue-50 to-blue-50'}`}>
                
                {/* Featured Image */}
                <div className="flex justify-center w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                        className="relative large-image xl:mx-auto 2xl:origin-bottom 2xl:scale-110 w-full h-auto"
                        src={bg2}
                        alt="bg2"
                    />
                </div>

                {/* Left column */}
                <div className="w-full flex flex-col md:ml-4">
                    <h4 className="text-lg font-semibold xl:text-2xl">Hey There</h4>
                    <h1 className="xl:text-6xl sm:text-5xl xs:text-3xl font-semibold mt-2">
                        <TypingEffect />
                    </h1>
                    <h4 className="text-blue-800 mt-4 lg:text-2xl">FullStack Developer</h4>
                    <p className="lg:w-[70%] xs:w-full text-sm mt-4 xl:text-xl">
                        Experienced full-stack developer with 2+ years of expertise in MERN, ASP.NET Core, Flask, and some React Native experience.
                    </p>
                </div>

                {/* Right column with statistics */}
                <div className="w-full flex flex-col sm:justify-center sm:gap-4 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10 mt-4 md:mt-0">
                    {[ 
                        { label: "Years of Experience", value: yearsOfExperience }, 
                        { label: "Component Contribution", value: componentContribution }, 
                        { label: "User's Got Help", value: usersGotHelp }, 
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="inline-flex gap-1 items-center">
                                <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-4xl font-semibold">{stat.value.toFixed(0)}</h2>
                                <h2 className="text-blue-800 xl:text-8xl md:text-7xl sm:text-6xl xs:text-4xl font-extrabold">+</h2>
                            </div>
                            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">{stat.label}</h4>
                        </div>
                    ))}
                </div>
                {/* Floating button for downloading resume */}
                <div className="fixed bottom-10 right-10 flex flex-col items-center">
                    <a 
                        href="/resume/cv.pdf" 
                        download 
                        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 hover:bg-blue-500'} `}
                        title="Download Resume"
                    >
                        <FaDownload className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`} /> {/* React Icons download icon */}
                    </a>
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Download</span>
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>my resume</span>
                </div>
            </div>
            
            <ExperienceSection/>
        </>
    );
};

export default HomePage;
