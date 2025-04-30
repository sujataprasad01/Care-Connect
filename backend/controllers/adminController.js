
import validator from "validator"
import bcrypt from "bcryptjs";

import { v2 as cloudinary } from 'cloudinary'
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
// Api for adding doctor
const addDoctor = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            speciality,
            degree,
            experience,
            about,
            available,
            fees,
            date,
          } = req.body;
          
          const address = {
            line1: req.body['address[line1]'] || '',
            line2: req.body['address[line2]'] || ''
          };
          
        const imageFile = req.file;

        if (!imageFile) {
            return res.json({ success: false, message: "Image file is missing" });
        }
        console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !about || !fees) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // to encrypt password || hashing doctor password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // Check if address is a string and try to parse it, otherwise leave it as is
        let parsedAddress;
        try {
            parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
        } catch (error) {
            return res.json({ success: false, message: "Invalid address format" });
        }

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees: Number(fees),
            address: parsedAddress,  // Use parsed address here
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// api for the admin login
const loginAdmin = (req, res) => {
    try {

        const {email, password}=req.body
        if(email===process.env.ADMIN_EMAIL && password===process
            .env.ADMIN_PASSWORD){
                const token=jwt.sign(email+password, process.env.JWT_SECRET)
                res.json({success:true, token})
            }else{
                res.json({success:false, message:"Invalid Credentials"})
            }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all doctors list for admin panel
const allDoctors=async(req,res)=>{
    try {
        const doctors=await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
export { addDoctor, loginAdmin, allDoctors }