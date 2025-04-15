import React from 'react';
import Appointment from '../assets/appointment.png';
import Diet from '../assets/diet.png';
import Symptom from '../assets/symptom.png';
import Map from '../assets/map.png';
import Healthcare from '../assets/healthcare-wallpaper.png'
import Doctor from '../assets/doctor.png'
import Video from '../assets/video-culsantant.png'
import Epriscribtion from '../assets/Epriscribtion.png'
import Neck from '../assets/neck.png'
// import Footer from './Footer';

import { Link } from 'react-router-dom';
import Speciality from '../components/Speciality';
import TopDoctors from '../components/TopDoctors';

const features = [
    { img: Doctor, title: "Doctor Selection via Profile & Bio", description: "View doctors' specialization, experience, and ratings before booking." },
    { img: Neck, title: "Symptoms Checker", description: "Users enter their symptoms, AI detects possible diseases." },
    { img: Doctor, title: "Diet Recommendations", description: "AI-generated diet plans based on BMI, disease, height, and weight." },
    { img: Doctor, title: "Appointment Booking & Scheduling", description: "Schedule video, audio, or chat-based consultations." },
    { img: Video, title: "Secure Video & Chat Consultation", description: "Encrypted communication for remote healthcare." },
    { img: Epriscribtion, title: "E-Prescriptions & Medical Records", description: "Access digital prescriptions, lab reports, and health history." },
];

const Home = () => {
    
    return (
        <>
        <div className="mx-4 md:mx-20 lg:mx-60 px-4 md:px-10 lg:px-20 mb-28">

        {/* Top Feature Icons Section (Mobile Optimized) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-customPurple font-semibold mb-28 mt-10">
            {[
              { img: Appointment, title: "Appointment" , path:"/appointment"}, 
              { img: Diet, title: "Diet Recommendations" , path:"/diet"}, 
              { img: Symptom, title: "Symptom Checker", path:"/symptom" }, 
              { img: Map, title: "Nearest Hospital", path:"/hospital"}
            ].map((item, index) => (
              <Link to={item.path} key={index}>
                <button key={index} className="cursor-pointer flex flex-col items-center border-2 border-gray-300 rounded-lg p-7 hover:bg-gray-100 transition duration-200 shadow-md w-full h-36 sm:h-40">
                    <img src={item.img} className="w-12 h-12 sm:w-14 sm:h-14 mb-2" alt={item.title} />
                    <h2 className="text-center font-medium text-gray-700 text-xs sm:text-sm">{item.title}</h2>
                </button>
                </Link>
            ))}
        </div>

        <Speciality></Speciality>   

        {/* Main Heading (Mobile Optimized) */}
        <div className="text-black text-center mb-22 rounded-lg px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Healthcare Experience with <span className="text-red-500">CareConnect</span></h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Seamlessly connect with doctors, schedule virtual consultations, and manage your health—all in one place.
                Get personalized care at your fingertips. Start your journey to better health today!
            </p>
        </div>
        <TopDoctors></TopDoctors>
    
        {/* Healthcare Image (Mobile Optimized) */}
        <div className="mb-28 flex justify-center mt-14">
            <img src={Healthcare} alt="Healthcare" className=" rounded-lg shadow-lg" />
        </div>
    
        {/* Features Section */}
        <div className="flex flex-col items-center justify-between">
            <h2 className='text-3xl font-semibold'>Features</h2>
            {/* Left Section (Mobile Optimized) */}
            {/* <div className="lg:w-1/2 text-center lg:text-left"> */}
                {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Your Family’s Health, <br />
                    <span className="text-red-500">Our Priority</span>
                </h1> */}
                {/* <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
                    Experience seamless healthcare with expert doctors, ensuring well-being for your loved ones anytime, anywhere.
                </p> */}
            {/* </div> */}
    
            {/* Right Section - Feature Cards (Mobile Optimized) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mt-10 lg:mt-0">
                {features.map((feature, index) => (
                    <div key={index} className=" p-4 w-40 sm:w-44 h-44 sm:h-48 flex flex-col items-center text-center hover:bg-gray-100 transition duration-200">
                        <img src={feature.img} alt={feature.title} className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />
                        <h3 className="text-sm sm:text-base font-bold text-gray-700">{feature.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    
    </div>
    
    {/* <Footer></Footer> */}
    </>
    );
}

export default Home;