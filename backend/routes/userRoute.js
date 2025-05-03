import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile , bookAppointment, cancelAppointment, paymentRazorpay, getUserAppointments} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter=express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile',authUser ,getProfile)
userRouter.post('/update-profile',upload.single('image'), authUser ,updateProfile)
userRouter.post('/book-appointment',authUser ,bookAppointment)
userRouter.post('/cancel-appointment',authUser ,cancelAppointment)
userRouter.get('/appointments', authUser, getUserAppointments)
userRouter.post('/payment-razorpay',authUser ,paymentRazorpay)


export default userRouter