import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doctors } from '../components/TopDoctors'
const Appointment = () => {
  const { docId } = useParams()
  const [docInfo, setDocInfo] = useState(null);

  const daysOfWeek=['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);

  }

  const getAvailableSlots = async() => {
    setDocSlots([])

    let today = new Date()

    for (let i = 1; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      // setting end time of the date wuth index
      let endTime = new Date()
      endTime.setDate(today.getDate() +i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)

      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
console.log(docSlots)
  },[docSlots])

const navigate=useNavigate();

  return docInfo && (
    <div className='mx-2 sm:mx-[5%] mb-20'>
      <div className='flex flex-row-reverse justify-center'>
        <div className='w-86 h-64'>
          <img src={docInfo.image} alt="" />
        </div>
        <div className='justify-center border-2 mt-8 border-gray-300 rounded-lg p-7 shadow-md w-full h-36 sm:h-40'>
          <p>{docInfo.name}</p>
          <p>{docInfo.degree} : {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
          <p>About {docInfo.about}</p>
          <p>Appointment Fee: {docInfo.fee}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-semibold text-xl'>Time Slots</h3>
        <div className='flex gap-6 '>
          {docSlots.length && docSlots.map((item, index)=>(
            <div onClick={()=>setSlotIndex(index)} key={index} className={`border-2 rounded-2xl border-gray-400 cursor-pointer shadow-md p-2 mt-8 w-28 mb-8 hover:bg-violet-900 hover:text-amber-50 justify-center items-center flex flex-col ${slotIndex===index?'bg-violet-900 text-white':'text-gray-400'}`}>
          <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
          <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-10 container mb-0'>
          {docSlots.length && docSlots[slotIndex].map((item, index)=>(
            <p onClick={()=>setSlotTime(item.time)} key={index}  className={`border-2 rounded-2xl border-gray-400 cursor-pointer shadow-md p-2 mt-8 w-24 hover:bg-violet-900 hover:text-amber-50 ${item.time===slotTime?'bg-violet-900 text-white':'text-gray-400'}`}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={()=>navigate('/payment')} className="px-4 py-1 border rounded text-sm cursor-pointer hover:bg-gray-100 transition ">Book an Appointment</button>
      </div>
    </div>
  )
}

export default Appointment
