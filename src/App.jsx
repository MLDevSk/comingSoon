import './App.css';
import Navbar from './components/Navbar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Function to upload email to backend
  const uploadEmail = async (email) => {
    const url = "https://artfulway.onrender.com/api/users/uploadEmail";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 || response.status === 409) {
          setStatusMessage("Email already exists. Please use a different one.");
          return;
        }
        setStatusMessage("Server error. Please try again later.");
        return;
      }

      setStatusMessage("Subscription successful!");
    } catch (error) {
      console.error("Fetch error:", error);
      setStatusMessage("Failed to subscribe. Please try again later.");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submission

    if (email.trim() === '') {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    // Send email to the backend
    await uploadEmail(email);

    // Send email through EmailJS
    const templateParams = {
      template_flebnup: email, // Replace 'email_from' with the key in your EmailJS template
    };

    emailjs.send(
      'service_ro7e11j',
      'template_flebnup',
      templateParams, // Pass the email object here
      'pSeYg99Pxha1pRmDH'
    )
      .then(() => {
        console.log('Email sent successfully through EmailJS!');
        setEmail(''); // Clear the email input
      })
      .catch(() => {
        setStatusMessage('Failed to send email via EmailJS. Please try again later.');
      });
  };

  return (
    <div
      style={{
        backgroundColor: '#292929',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="font-sans text-gray-100"
    >
      {/* Navbar */}
      <div className="w-full shadow-md">
        <Navbar />
      </div>

      {/* Lottie Animation Section */}
      <div className="flex flex-col justify-center items-center py-16">
        <DotLottieReact
          src="https://lottie.host/ff19a623-a44f-4e87-aadd-5ed715e8933d/UUcymceAsy.lottie"
          loop
          autoplay
          className="w-full max-w-4xl h-auto"
        />
        <h1 className="font-bold text-4xl mt-10 tracking-widest text-center">
          COMING SOON
        </h1>
        <p className="text-lg text-gray-400 mt-4 text-center max-w-2xl">
          We’re working hard to launch something amazing. Stay tuned and subscribe for updates!
        </p>
      </div>

      {/* Email Subscription Form */}
      <div className="w-full flex justify-center py-10 bg-[#1E1E1E]">
        <div className="w-full max-w-md bg-[#2A2A2A] rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">
            Get Notified
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Enter your email below to stay updated when we launch.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md text-black text-sm outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#B16573] text-white rounded-md hover:bg-zinc-700 transition duration-200 subscribe-button"
            >
              Subscribe
            </button>
          </form>
          {statusMessage && (
            <p className="text-center text-sm mt-4 text-gray-300">{statusMessage}</p>
          )}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-[#1E1E1E] py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
          <p className="text-gray-400 mb-6">
            Stay connected and follow us on our social media platforms for updates and exciting content!
          </p>
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/artfullway/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaInstagram className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-400">Instagram</p>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/artfulway/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaLinkedin className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-400">LinkedIn</p>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Artfullways"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaYoutube className="w-12 h-12" />
              <p className="mt-2 text-sm text-gray-400">YouTube</p>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/artfullway"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/031/737/215/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png"
                alt="X"
                className="w-12 h-12 rounded-full hover:opacity-80 transition duration-200"
              />
              <p className="mt-2 text-sm text-gray-400">X</p>
            </a>
          </div>

          {/* Email Address */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-300 mb-2">Contact Us</h4>
            <a
              href="mailto:hello@artfulway.in"
              className="text-blue-500 text-md hover:underline"
            >
              hello@artfulway.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
