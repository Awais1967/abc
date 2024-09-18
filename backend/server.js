// console.log("hello from server")

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DBCon from './utlis/db.js'
import AuthRoutes from './routes/Auth.js'
import AdminRoutes from './routes/AdminRoute.js'
import cookieParser from 'cookie-parser'
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',  // Frontend origin
    credentials: true,    
}))
app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)
// mongo db
DBCon()
app.get('/',(req,res)=>{
    res.send('test')
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

