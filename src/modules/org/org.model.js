import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    orgName: "String",
    description: "String",
    admin: mongoose.Types.ObjectId, 
    member: [mongoose.Types.ObjectId]
}, {timestamps: true})

const orgModel = mongoose.model("organisations", orgSchema);

export default orgModel;