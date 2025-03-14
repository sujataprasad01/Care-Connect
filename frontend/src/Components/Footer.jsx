import React from 'react'
import chatbot from '../assets/chatbot.mp4'
const Footer = () => {
  return (
    <div className='fixed bottom-0 right-0'>
        <button className='cursor-pointer'>
      <video src={chatbot} autoPlay muted loop width="150"></video>
      </button>
    </div>
  )
}

export default Footer
