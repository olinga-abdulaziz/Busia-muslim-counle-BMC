const express=require('express')
const bodparser=require('body-parser')
const dotenv=require('dotenv')
const db=require('./db/MONGO')
const bodyParser = require('body-parser')
const memberRouter=require('./Routes/memberRouter')
const accountRouter=require('./Routes/AccountRouter')

//load dotenv
dotenv.config()

// initialize app
const app=express()

// load db
db()

// MIDDLEWARES
app.use(express.json())
app.use(bodparser.json())
app.use(bodyParser.urlencoded({extended:true}))

//load routes
app.use('/member',memberRouter)
app.use('/account',accountRouter)


//Listening to server
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>console.log(`server is running on port : ${PORT}`))