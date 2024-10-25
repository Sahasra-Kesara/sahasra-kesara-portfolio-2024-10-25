import React from 'react';
import CertificateSlideInCard from '../components/CertificateSlideInCard';
import { useTheme } from '../components/ThemeContext';

const certificatesData = [
  {
    "title": "Trainee - Full Stack Developer | University of Moratuwa",
    "certification": "Front-End Web Development",
    "issued": "Aug 2023",
    "credentialId": "wHCzigvIO8",
    "link": "https://open.uom.lk/lms/mod/customcert/view.php?id=839&forceview=1"
  },
  {
    "title": "Trainee - Full Stack Developer | University of Moratuwa",
    "certification": "Server-side Web Programming",
    "issued": "Aug 2023",
    "credentialId": "bz8vp7H2WB",
    "link": "https://open.uom.lk/lms/mod/customcert/view.php?id=1025&forceview=1"
  },
  {
    "title": "Trainee - Full Stack Developer | University of Moratuwa",
    "certification": "Programming in Python",
    "issued": "Aug 2023",
    "credentialId": "1GGsOugoE3",
    "link": "https://open.uom.lk/lms/mod/customcert/view.php?id=838"
  },
  {
    "title": "Trainee - Full Stack Developer | University of Moratuwa",
    "certification": "Python for Beginners",
    "issued": "Aug 2023",
    "credentialId": "bk0xGQcQrN",
    "link": "https://open.uom.lk/lms/mod/customcert/view.php?id=675"
  },
  {
    "title": "Trainee - Full Stack Developer | University of Moratuwa",
    "certification": "Web Design for Beginners",
    "issued": "Aug 2023",
    "credentialId": "KVLvQbJPGf",
    "link": "https://open.uom.lk/lms/mod/customcert/view.php?id=697&forceview=1"
  },
  {
    "title": "Introduction to Cloud Computing | IBM",
    "certification": "Introduction to Cloud Computing",
    "issued": "Nov 2023",
    "credentialId": "ZCRMC9J5TJ28",
    "link": "https://coursera.org/share/19b77b5ea6d4d808bf805662d97e244c"
  },
  {
    "title": "Introduction to Containers w/ Docker, Kubernetes & OpenShift | IBM",
    "certification": "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    "issued": "Nov 2023",
    "credentialId": "3715bfa452736c5769a554a40b53669b",
    "link": "https://coursera.org/share/3715bfa452736c5769a554a40b53669b"
  },
  {
    "title": "API Producer Learning Path | Postman",
    "certification": "API Producer Learning Path",
    "issued": "Nov 2023",
    "credentialId": "ybq68c6ko4um",
    "link": "http://verify.skilljar.com/c/ybq68c6ko4um"
  },
  {
    "title": "Angular (Basic) | HackerRank",
    "certification": "Angular (Basic)",
    "issued": "Sep 2023",
    "credentialId": "0145b184cdcb",
    "link": "https://www.hackerrank.com/certificates/0145b184cdcb"
  },
  {
    "title": "CSS | HackerRank",
    "certification": "CSS",
    "issued": "Sep 2023",
    "credentialId": "439efec02945",
    "link": "https://www.hackerrank.com/certificates/439efec02945"
  },
  {
    "title": "JavaScript (Intermediate) | HackerRank",
    "certification": "JavaScript (Intermediate)",
    "issued": "Sep 2023",
    "credentialId": "6e3647cc7485",
    "link": "https://www.hackerrank.com/certificates/6e3647cc7485"
  },
  {
    "title": "Node(Basic) | HackerRank",
    "certification": "Node(Basic)",
    "issued": "Sep 2023",
    "credentialId": "d98047df72ee",
    "link": "https://www.hackerrank.com/certificates/d98047df72ee"
  },
  {
    "title": "React (Basic) | HackerRank",
    "certification": "React (Basic)",
    "issued": "Sep 2023",
    "credentialId": "35d378d9b0ea",
    "link": "https://www.hackerrank.com/certificates/35d378d9b0ea"
  },
  {
    "title": "Rest API (Intermediate) | HackerRank",
    "certification": "Rest API (Intermediate)",
    "issued": "Sep 2023",
    "credentialId": "2942612f14a2",
    "link": "https://www.hackerrank.com/certificates/2942612f14a2"
  },
  {
    "title": "SQL (Advanced) | HackerRank",
    "certification": "SQL (Advanced)",
    "issued": "Sep 2023",
    "credentialId": "72251cf460ef",
    "link": "https://www.hackerrank.com/certificates/72251cf460ef"
  },
  {
    "title": "SQL (Intermediate) | HackerRank",
    "certification": "SQL (Intermediate)",
    "issued": "Sep 2023",
    "credentialId": "4f5597060db6",
    "link": "https://www.hackerrank.com/certificates/4f5597060db6"
  },
  {
    "title": "JavaScript (Basic) Certificate | HackerRank",
    "certification": "JavaScript (Basic) Certificate",
    "issued": "Aug 2023",
    "credentialId": "E3B5D83C9564",
    "link": "https://www.hackerrank.com/certificates/e3b5d83c9564"
  },
  {
    "title": "Problem Solving (Basic) Certificate | HackerRank",
    "certification": "Problem Solving (Basic) Certificate",
    "issued": "Aug 2023",
    "credentialId": "061CEE2DD580",
    "link": "https://www.hackerrank.com/certificates/061cee2dd580"
  },
  {
    "title": "Python (Basic) Certificate | HackerRank",
    "certification": "Python (Basic) Certificate",
    "issued": "Aug 2023",
    "credentialId": "06A0A2d0D93A",
    "link": "https://www.hackerrank.com/certificates/06a0a2d0d93a"
  },
  {
    "title": "SQL (Basic) Certificate | HackerRank",
    "certification": "SQL (Basic) Certificate",
    "issued": "Aug 2023",
    "credentialId": "516B708912BF",
    "link": "https://www.hackerrank.com/certificates/516b708912bf"
  },
  {
    "title": "Java (Basic) Certificate | HackerRank",
    "certification": "Java (Basic) Certificate",
    "issued": "Jul 2023",
    "credentialId": "1B39A711D5E0",
    "link": "https://www.hackerrank.com/certificates/1b39a711d5e0"
  }
];

const Certificates = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={` p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className={`text-4xl font-bold mb-6 text-center drop-shadow-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Licenses & Certifications</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {certificatesData.map((cert, index) => (
          <div
            key={index}
            className={`shadow-lg flex-grow border-l-8 rounded-lg p-6 w-full md:w-5/12 lg:w-3/12 transition-transform transform hover:scale-105 hover:shadow-2xl ${isDarkMode ? 'bg-gray-800 border-blue-900' : 'bg-gradient-to-r from-white via-blue-50 to-blue-50 border-blue-300'}`}
          >
            {cert.title && (
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{cert.title}</h2>
            )}
            <h3 className={`text-xl font-medium mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{cert.certification}</h3>
            <p className={`font-light text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              <strong>Issued:</strong> {cert.issued}
            </p>
            {cert.credentialId && (
              <p className={`font-light text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                <strong>Credential ID:</strong> {cert.credentialId}
              </p>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-block px-4 py-2 rounded-md transition-colors ${isDarkMode ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-blue-300 text-white hover:bg-blue-500'}`}
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>

      <CertificateSlideInCard />
    </div>
  );
};

export default Certificates;