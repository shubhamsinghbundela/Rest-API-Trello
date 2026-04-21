import mongoose from "mongoose";

const boardSchema = mongoose.Schema({
    boardName: "String",
    organisationId: mongoose.Types.ObjectId
})

const boardModel = mongoose.model("boards", boardSchema);

export default boardModel;