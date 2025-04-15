import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
// app

const app=express()
const port=process.env.PORT || 4000
connectDB()

// middlewares

app.use(express.json())
app.use(cors())

// api endpoints

app.get('/', (req, res)=>{
 res.send("Api working")
})

// start express app

app.listen(port, ()=> 
    console.log("App running successfully", port)
)