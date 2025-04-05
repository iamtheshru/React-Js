import mongoose, { Schema, Document } from "mongoose";
import { Content } from "next/font/google";


export interface Message extends Document {
    content: string;
    createAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
})


export interface User extends Document {
    Username: string;
    Password: string;
    Email: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerifed: boolean;
    isAcceptedMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    Username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    Password: {
        type: String,
        required: [true, "Password is required"],
    },
    Email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match:[/.+\@.+\..+/, "Please fill a valid email address"],
    },
    verifyCode: {
        type: String,
        required: [true, "verifyCode is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verifyCodeExpiry is required"],
    },
    isVerifed: {
        type: Boolean,
        default: false,
    },
    isAcceptedMessage: {
        type: Boolean,
        default: false
    },
    messages: [MessageSchema]
});

const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;