import mongoose from 'mongoose'

const trackuserstatus = new mongoose.Schema({
        name:{
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        sapid:{type:Number, required: true, unique:true},
        total_crhr:{type: Number, required: true},
        Remaining_crhr:{type: Number, required: true},
        book_issue:{type: Number, required: true},
        total_fees:{type: Number, required: true},
        Remaining_Dues:{type: Number, required: true},
        sport_equipment:{type: String, required: true},
        student_details:{type: Number},
        orderId: orderId,
        currentStatus: "Pending",
        statuses: [
         { name: "In Progess", completed: true },
         { name: "Pending", completed: false },
         { name: "Approved", completed: true },
         { name: "DisApproved", completed: false },
        ],

},{timestamps: true})

const UserStatus = mongoose.model('trackinguserstatus',trackuserstatus)
export default UserStatus