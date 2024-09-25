import mongoose from 'mongoose';

// Define schema for user status tracking
const trackuserstatus = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    sapid: {
        type: Number,
        required: true,
        unique: true,
    },
    total_crhr: {
        type: Number,
        required: true,
    },
    remaining_crhr: {
        type: Number,
        required: true,
    },
    book_issue: {
        type: Number,
        required: true,
    },
    total_fees: {
        type: Number,
        required: true,
    },
    remaining_dues: {
        type: Number,
        required: true,
    },
    sport_equipment: {
        type: String,
        required: true,
    },
    student_details: {
        type: Number,
    },
    currentStatus: {
        type: String,
        default: "Pending",   // Default status as "Pending"
    },
    statuses: [
        {
            name: { type: String, required: true },
            completed: { type: Boolean, required: true },
        },
    ],
}, { timestamps: true });

const UserStatus = mongoose.model('UserStatus', trackuserstatus);
export default UserStatus;
