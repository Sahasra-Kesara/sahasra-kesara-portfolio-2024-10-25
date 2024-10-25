import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../components/ThemeContext'; // Import the useTheme hook

const ContactPage = () => {
  const { isDarkMode } = useTheme(); // Get the isDarkMode state

  return (
    <div className={`p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-lg text-center mb-8">Feel free to reach out with any questions or inquiries.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        
        <div className="rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-700" />
              <a href="https://www.linkedin.com/in/kesare-cooray-544424256/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Kesare Cooray
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebook className="text-blue-600" />
              <a href="https://www.facebook.com/share/ruzo72ndNcdkmwD1/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Sahasra Kesara
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <a href="https://wa.me/qr/WT7Q3WU3K6FYM1" className="hover:text-blue-500">+(94) 77 056 8688</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-700" />
              <a href="mailto:sahasrakesara@gmail.com" className="hover:text-blue-500">sahasrakesara@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Address: 54/3, Sri Medhananda Rd, Lakshapathiya, Moratuwa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
