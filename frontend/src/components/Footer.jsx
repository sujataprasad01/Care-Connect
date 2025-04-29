import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import chatbot from "../assets/chatbot.mp4";

const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray-600 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Care Connect</h3>
            <p className="text-gray-300">
              Your trusted healthcare partner, providing expert consultations and 
              medical services for your entire family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/appointments" className="hover:text-yellow-400">Appointments</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pricing</a></li>
              <li><a href="/about" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/about" className="hover:text-yellow-400">Help Center</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 text-xl"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-400 text-xl"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-400 text-xl"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-400 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-300 mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Care Connect. All rights reserved.
        </div>
      </div>

      {/* Chatbot Video Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button className="cursor-pointer rounded-full shadow-lg transition-transform transform hover:scale-110">
          <video src={chatbot} autoPlay muted loop width="120" className="rounded-full" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;