const express = require("express")
const tasks = require('./routes/tasks.js')
const path = require("path")
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))



app.use('/api/v1/tasks',tasks)


const port = 3000 

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`Server is running on port ${port}`))
    }catch(err){
        console.log(err)
    }
} 

start()
