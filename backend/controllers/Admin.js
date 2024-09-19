import UserModel from "../models/user.js"
const Getuser = async(req,res)=>{
    try {
            const users = await UserModel.find()
            res.status(200).json({users})



        // console.log("working")
        // res.send("heelo")
    } catch (error) {
        res.status(500).json({message:"internal server error"})
        console.log(error)
    }
}
const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      
      // Find user by ID first
      const checkUser = await UserModel.findById(userId);
      
      // If user doesn't exist
      if (!checkUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Check if the user is an admin
      if (checkUser.role === 'admin') {
        return res.status(409).json({ message: "Admin cannot be deleted" });
      }
      
      // Delete the user if not an admin
      await UserModel.findByIdAndDelete(userId);
      
      res.status(200).json({ message: "User deleted successfully" });
      
    } catch (error) {
      // Log and return internal server error
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
export {Getuser,deleteUser}