import React from "react";
import DoctorImage from '../assets/DoctorImage.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 ">
      <div className="max-w-4xl text-center">
        
        {/* Image Section */}
        

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our <span className="text-red-500">Telemedicine Platform</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our platform revolutionizes healthcare by providing seamless virtual consultations between patients and doctors. 
          Whether you need a quick check-up or a specialist consultation, we bring healthcare services to your fingertips.
        </p>
        <div className="mb-6 flex justify-center">
          <img src={DoctorImage} alt="Doctor" className="rounded-lg shadow-lg" />
        </div>
        {/* Why Choose Us Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Why Choose Us?
        </h2>

        <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
          <li>✅ AI-powered symptom checker for quick assessments</li>
          <li>✅ Secure video, audio, and chat consultations</li>
          <li>✅ Easy appointment booking and scheduling</li>
          <li>✅ E-prescriptions and digital medical records</li>
          <li>✅ Pharmacy & lab test booking with home delivery</li>
          <li>✅ Google Maps integration for locating hospitals</li>
        </ul>

        {/* Final Message */}
        <p className="text-lg text-gray-700 mt-6">
          We are committed to making healthcare accessible, secure, and efficient for everyone. 
          Join us in redefining the future of telemedicine!
        </p>
      </div>
    </div>
  );
};

export default About;
