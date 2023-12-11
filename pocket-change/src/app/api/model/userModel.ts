import mongoose, { Schema } from 'mongoose';
import { boolean } from 'webidl-conversions';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username!"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email!"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: true,
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
