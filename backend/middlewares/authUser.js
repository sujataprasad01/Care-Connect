import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
// user authentication middleware
const authUser=async (req, res, next)=>{
    try {
   const {token}=req.headers
   if (!token) {
    return res.json({success:false, message:"Not Authorized login again"})
   }
   const token_decode=jwt.verify(token, process.env.JWT_SECRET)
   req.body = req.body || {}
   req.body.userId=token_decode.id
   const user = await User.findById(token_decode.id).select('-password');
   if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

   req.user = user; 
   next()
    }  catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authUser