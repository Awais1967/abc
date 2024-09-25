
import bcryptjs from 'bcryptjs'
import UserModel from '../models/user.js'
import jwt from 'jsonwebtoken'
const register = async(req,res)=>{
    try {
        const {name,sapid,email,password} = req.body
        const existUser = await UserModel.findOne({email})
        if(existUser){
            return res.status(401).json({success: false,message: "User already Exist"})
        }
            const hashpassword = await bcryptjs.hashSync(password,10)
        const newUser = new UserModel({
            name,sapid,email,password: hashpassword
        })
        await newUser.save()
        res.status(200).json({message: "user registered successfully",newUser})
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
        
    }
}
const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({sucess:false,message: "Invalid credentials"})
        }
        const ispasswordValid = await bcryptjs.compare(password,user.password)
        if(!ispasswordValid){
            return res.status(404).json({sucess:false,message: "Invalid credentials"})
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET)
        res.cookie('token',token,{
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        })
        res.status(200).json({success:true,message: "user login successfully",user,token})
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}
const logout= async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({message:"user logout successfully"})
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error)
    }
}
const CheckUser = async (req,res)=>{
    try {
        const user = req.user
        if(!user){
            res.status(404).json({message:'user is not found'})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:"user is not found"})
    }
}
export  {register,login,logout,CheckUser}