import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  const ExperienceItem = ({ title, period, details, index }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    return (
      <div className="text-center transition-transform transform duration-300 hover:scale-105">
        <div className={`flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <span className="text-xl font-semibold text-gray-700">{index + 1}</span>
        </div>
        <h3 className={`mt-6 text-xl font-semibold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>{title}</h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>{period}</p>
        <ul className={`no-dots pl-5 mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {showMore ? (
            details.map((detail, idx) => (
              <li key={idx} className={`transition-opacity duration-500 ease-in ${showMore ? 'opacity-100' : 'opacity-0'}`}>{detail}</li>
            ))
          ) : (
            <li className={`transition-opacity duration-500 ease-in ${showMore ? 'opacity-100' : 'opacity-0'}`}>{details[0]}</li>
          )}
        </ul>

        <button 
          onClick={toggleShowMore} 
          className={`mt-2 text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline transition-all duration-300`}
        >
          {showMore ? 'See less' : 'See more'}
        </button>
      </div>
    );
  };

  return (
    <section id="experience" className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-10 sm:py-16 lg:py-24`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-4xl ${isDarkMode ? 'text-white' : 'text-gray-800'} animate-bounce font-extrabold mx-auto md:text-6xl lg:text-5xl`}>Work Experience</h2>
          <p className={`max-w-2xl mx-auto mt-4 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed md:text-2xl`}>
            Here are some of the places I've worked and what I've done.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full animate-pulse"  // Added animate-pulse here
              style={{ color: 'transparent' }}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
            <ExperienceItem
              title="StackNet (Pvt) Ltd (Freelance Job)"
              period="Aug 2024 - Present"
              details={[
                "Founder and CEO",
                "Lead a dynamic team of skilled professionals in software development.",
                "Delivering customized software applications across various industries.",
                "Developing web and mobile applications, AI-driven software, e-commerce platforms, and UI/UX design."
              ]}
              index={0}
            />
            <ExperienceItem
              title="Solar Care International"
              period="June 2024 - Present"
              details={[
                "Software Engineering Team Lead",
                "Raffle Draw and Home Electrical Device management software.",
                "Develop and maintain the front-end using React.js and Material-UI.",
                "Implement back-end services using Node.js and Express.js."
              ]}
              index={1}
            />
            <ExperienceItem
              title="BlueTech Cloud Solutions"
              period="Apr 2023 – Jul 2023"
              details={[
                "Junior .Net Developer",
                "Worked on Point Of Sale Systems for Restaurants, Bars, Supermarkets."
              ]}
              index={2}
            />
            <ExperienceItem
              title="Medium"
              period="Jun 2023 - Aug 2024"
              details={[
                "Blog Writer",
                "Wrote articles on database administration, cloud technologies, and IT trends."
              ]}
              index={3}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)'
        }}>
      </div>
    </section>
  );
};

export default ExperienceSection;
