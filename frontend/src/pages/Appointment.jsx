import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext' // 👈 Access global doctors data here
import { toast } from 'react-toastify'; 
const Appointment = () => {
  const { token } = useContext(AppContext);
  const { doctors } = useContext(AppContext) // 👈 Use context instead of importing doctors
  const { docId } = useParams()
  const [docInfo, setDocInfo] = useState(null)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = () => {
    const info = doctors?.find(doc => doc._id === docId)
    setDocInfo(info)
  }

  const getAvailableSlots = () => {
    setDocSlots([])

    let today = new Date()
    let slotsPerDay = []

    for (let i = 1; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      currentDate.setHours(10)
      currentDate.setMinutes(0)

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      slotsPerDay.push(timeSlots)
    }

    setDocSlots(slotsPerDay)
  }

  useEffect(() => {
    if (doctors.length) {
      fetchDocInfo()
    }
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  const navigate = useNavigate()

  return docInfo && (
    <div className='mx-2 sm:mx-[5%] mb-20'>
      <div className='flex flex-row-reverse justify-center'>
        <div className='w-86 h-64'>
          <img src={docInfo.image} alt={docInfo.name} className='w-full h-full object-cover' />
        </div>
        <div className='justify-center border-2 mt-8 border-gray-300 rounded-lg p-7 shadow-md w-full h-36 sm:h-40'>
          <p>{docInfo.name}</p>
          <p>{docInfo.degree} : {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
          <p>About: {docInfo.about}</p>
          <p>Appointment Fee: ₹{docInfo.fee}</p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-semibold text-xl'>Time Slots</h3>
        <div className='flex gap-6'>
          {docSlots.map((item, index) => (
            <div
              onClick={() => setSlotIndex(index)}
              key={index}
              className={`border-2 rounded-2xl border-gray-400 cursor-pointer shadow-md p-2 mt-8 w-28 mb-8 flex flex-col items-center ${slotIndex === index ? 'bg-violet-900 text-white' : 'text-gray-400 hover:bg-violet-900 hover:text-white'}`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 container mb-8'>
          {docSlots[slotIndex]?.map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              key={index}
              className={`border-2 rounded-2xl border-gray-400 cursor-pointer shadow-md p-2 text-center hover:bg-violet-900 hover:text-white ${item.time === slotTime ? 'bg-violet-900 text-white' : 'text-gray-400'}`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button
          onClick={() => {
            if (!token) {
              toast.error("Please sign up first to book an appointment!");
              navigate('/signup')
            } else {
              navigate('/payment')
            }
          }}
          
          className="px-4 py-1 border rounded text-sm cursor-pointer hover:bg-gray-100 transition"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default Appointment
