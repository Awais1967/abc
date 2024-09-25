import TrackUserStatus from "../models/trackuserstatus";

const Userstatus = async(req,res)=>{
    try {
        await TrackUserStatus.findByIdAndDelete(req.body)
    } catch (error) {
        
    }
}

export {Userstatus}