import React, { useState } from 'react';
// import profile from '../assets/profile.png';
import { useTheme } from '../components/ThemeContext';
import Education from '../components/Education';

const AboutPage = () => {
  const { isDarkMode } = useTheme();
  const [isVideoPlaying] = useState(true);

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-white'}`}>
      {/* Background Video */}
      <video
        autoPlay={isVideoPlaying}
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-5"
        style={{ opacity: isDarkMode ? 0.7 : 0.1 }}
      >
        <source src="https://res.cloudinary.com/dwf8ifbzs/video/upload/v1729889406/3129785-sd_426_240_25fps_aaouab.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Overlay for dark mode */}
      <div className={`absolute top-0 left-0 w-full h-full z-10 ${isDarkMode ? 'bg-black opacity-70' : ''}`} />

      <section className="overflow-hidden pt-16 mb-24 relative z-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left column: Title */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} sm:text-4xl lg:text-5xl`}>
                About Me
              </h2>
            </div>

            {/* Right column: Text content */}
            <div className="md:w-1/2 md:pl-10">
              <div className={`rounded-lg max-w-2xl p-6 ${isDarkMode ? '' : ''}`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  
                  {/* About Me Section */}
                  <AboutSection 
                    title="About Me"
                    subtitle="2+ years experience"
                    description="Passionate Software Engineering professional with over two years of experience, currently serving as a Software Engineering Team Lead at Solar Care International. Leads innovative MERN stack projects on AWS."
                    isDarkMode={isDarkMode}
                  />
                  
                  {/* Previous Role Section */}
                  <AboutSection 
                    title="Previous Role"
                    subtitle="Junior Developer"
                    description="Previously worked at BlueTech Cloud Solutions, focusing on Point of Sale systems and property management solutions using C#, ASP.Net, and Microsoft SQL Server."
                    isDarkMode={isDarkMode}
                  />
                  
                  {/* Education Section */}
                  <AboutSection 
                    title="Education"
                    subtitle="BSc. (Hons) S E"
                    description="Holds a BSc. (Hons) in Software Engineering from ICBT. Actively pursues knowledge in programming languages and technologies like Python and cloud computing."
                    isDarkMode={isDarkMode}
                  />
                  
                  {/* Expertise Section */}
                  <AboutSection 
                    title="Expertise"
                    subtitle="MERN & AWS"
                    description="Skilled in software architecture design, project management, and technical recruitment. Eager to embrace new challenges and make a positive impact in the software engineering field."
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Education />
      </div>
    </div>
  );
};

// AboutSection Component
const AboutSection = ({ title, subtitle, description, isDarkMode }) => (
  <div className="px-6 py-4">
    <div className="flex justify-between">
      <span className="font-semibold text-lg">{title}</span>
      <span className={`text-gray-500 text-justify text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</span>
    </div>
    <p className={`mt-2 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {description}
    </p>
  </div>
);

export default AboutPage;
