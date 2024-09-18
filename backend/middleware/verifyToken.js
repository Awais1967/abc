import jwt from 'jsonwebtoken'
import UserModel from '../models/user.js' 

const isAdmin = async(req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message: "Unauthorized: no token provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await UserModel.findById(decoded.userId)
        if(!user){
            return res.status(401).json({message: "user not found"})
        }
        if(user.role !== 'admin'){
            return res.status(403).json({message: "Unauthorized: User is not admin"})
        }
        req.user = user
        next()
        console.log("user",user)
        console.log("decoded",decoded);
        
        console.log("token",token)
    } catch (error) {
     console.log(error)   
    }
}
export {isAdmin}