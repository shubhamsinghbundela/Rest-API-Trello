import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    description: "String",
    status: "String",
    boardId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
})

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;