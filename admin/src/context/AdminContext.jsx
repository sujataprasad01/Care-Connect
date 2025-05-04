import { createContext, useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'
export const AdminContext = createContext()
const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [allAppointments, setAllAppointments] = useState([]);
    const [doctors, setDoctors]=useState([])
    const getAllDoctors=async()=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/all-doctors', {}, {headers:{aToken}})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {
        try {
          const { data } = await axios.post(
            backendUrl + '/api/admin/all-appointments',
            {},
            { headers: { aToken } }
          );
          if (data.success) {
            setAllAppointments(data.allAppointments);
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };

// const changeAvailability=async(docId)=>{
//     try {
//         const {data}=await axios.post(backendUrl+'/api/admin/change-availability', {docId}, {headers:{aToken}})
//         if (data.success) {
//             toast.success(data.message)
//             getAllDoctors()
//         } else {
//             toast.error(data.message)
//         }
//     } catch (error) {
//         toast.error(error.message)
//     }
// }

    const value = {
        aToken, setAToken,
        backendUrl, doctors, getAllDoctors, getAllAppointments, allAppointments
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider