import mongoose, { Schema } from 'mongoose'
import bcrypt from "bcryptjs"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        profilePicture: {
            type: String,
        },
        followersCount: {
            type: Number,
            default: 0,
        },
        followingCount: {
            type: Number,
            default: 0,
        },
        password: {
            type: String,
            required: [true, 'Password is required!'],
            select: false
        },
        refreshToken: {
            type: String,
            select: false
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function
    (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)