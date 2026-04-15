import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: 'String',
    password: "String"
}, {timestamps: true})

const userModel = mongoose.model("users", userSchema);

export default userModel;