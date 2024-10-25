import React from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the useTheme hook

const ContactForm = () => {
  const { isDarkMode } = useTheme(); // Get the isDarkMode state

  return (
    <div className={`rounded-lg p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-bold mb-2">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
