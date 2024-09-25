import express from 'express'
import { Getuser,deleteUser } from '../controllers/Admin.js'
import { Userstatus } from '../controllers/Usertrack.js'
import { isAdmin } from '../middleware/verifyToken.js'

const AdminRoutes = express.Router()
  AdminRoutes.get('/getuser',isAdmin,Getuser)
  AdminRoutes.delete('/delete/:id',isAdmin,deleteUser)
  
export default AdminRoutes