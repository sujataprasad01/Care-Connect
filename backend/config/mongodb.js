import mongoose from "mongoose";

const commectDB=async()=>{
    mongoose.connection.on('connected', ()=>
        console.log("Database Connected"))
  await mongoose.connect(`${process.env.MONGODB_URI}/careconnect`)
}

export default commectDB