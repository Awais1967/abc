import express from 'express'
import { Userstatus } from '../controllers/Usertrack.js'
const Usertrack = express.Router()

 Usertrack.post("/userstatus",Userstatus)
export default Usertrack