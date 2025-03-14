import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Appointment from '../assets/appointment.png'
import Diet from '../assets/diet.png'
import Symptom from '../assets/symptom.png'
import Map from '../assets/map.png'

const Home = () => {
  return (
    <div>
    <div className="flex flex-row justify-evenly text-customPurple drop-shadow-[3px_3px_0px_rgba(0,0,0,0)] font-semibold">
      
      {/* Appointment */}
      <div className="flex flex-col items-center justify-center">
        <button className="cursor-pointer flex flex-col items-center">
          <img src={Appointment} className="w-20 h-20 mb-2" />
          <h2 className="text-center">Appointment</h2>
        </button>
      </div>
  
      {/* Diet Recommendations */}
      <div className="flex flex-col items-center justify-center">
        <button className="cursor-pointer flex flex-col items-center">
          <img src={Diet} className="w-20 h-16 mb-2" />
          <h2 className="text-center">Diet Recommendations</h2>
        </button>
      </div>
  
      {/* Symptom Checker */}
      <div className="flex flex-col items-center justify-center">
        <button className="cursor-pointer flex flex-col items-center">
          <img src={Symptom} className="w-20 h-18 mb-2" />
          <h2 className="text-center">Symptom Checker</h2>
        </button>
      </div>
  
      {/* Nearest Hospital */}
      <div className="flex flex-col items-center justify-center">
        <button className="cursor-pointer flex flex-col items-center">
          <img src={Map} className="w-20 h-20 mb-2" />
          <h2 className="text-center">Nearest Hospital</h2>
        </button>
      </div>
  
    </div>
  </div>
  
  )
}

export default Home
