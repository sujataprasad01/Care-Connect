import mongoose from "mongoose"
const appointmentSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // or 'User' depending on your model name
        required: true
      },
      docId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',  // or 'Doctor' depending on your model name
        required: true
      },
    slotTime:{
        type:String,
        required:true
    },
    userData:{
        type:Object,
        required:true
    },
    docData:{
        type:Object,
        required:true
    },
    amount:{
        type:Number, 
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    cancelled:{
        type:Boolean,
        default:false
    },
    payment:{
        type:Boolean,
        default:false
    },
    slotDate: {
        type: String,
        default: true
    }    
})

const appointmentModel=mongoose.models.appointment || mongoose.model('appointment', appointmentSchema)
export default appointmentModel