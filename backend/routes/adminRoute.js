import express from 'express'
import {addDoctor, allDoctors, loginAdmin, allAppointments} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
// import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter=express.Router()
adminRouter.post('/add-doctor', upload.single('image'), authAdmin, addDoctor); 
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors',authAdmin ,allDoctors)
adminRouter.post('/all-appointments', authAdmin, allAppointments)
// adminRouter.post('/change-availability',authAdmin ,changeAvailability)

export default adminRouter