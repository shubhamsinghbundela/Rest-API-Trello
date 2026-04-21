import ApiError from "../../common/utils/api-error.js";
import boardModel from "../board/board.model.js";
import taskModel from "./task.model.js";

const createTask = async (req) => {
    const { description, status, boardId } = req.body;
    if (!description || !status || !boardId) {
        throw ApiError.badRequest("All fields are required")
    }

    const allowedStatus = ["Todo", "In Progress", "Done"];
    if (!allowedStatus.includes(status)) {
        throw ApiError.badRequest("Invalid status")
    }

    const board = await boardModel.findById(boardId);
    if (!board) {
        throw ApiError.notFound("Board not found")
    }

    const taskExists = await taskModel.findOne({
        userId: req.userId,
        description,
        boardId
    });

    if (taskExists) {
        throw ApiError.forbidden("Task already exists in this board")
    }

    const newTask = await taskModel.create({
        userId: req.userId,
        description,
        status,
        boardId
    });

    return newTask;
}

const updateTask = async (req) => {
    const { taskId, status } = req.body;
    const allowedStatus = ["Todo", "In Progress", "Done"];
    if (!allowedStatus.includes(status)) {
        throw ApiError.badRequest("Invalid status")
    }

    const task = await taskModel.findOne({
        _id: taskId,
        userId: req.userId
    });

    if (!task) {
        throw ApiError.notFound("Task not found")
    }

    task.status = status;
    await task.save();

    return task;
}

const deleteTask = async (req) => {
    const { taskId } = req.body;

    const task = await taskModel.findOne({
        _id: taskId,
        userId: req.userId
    });

    if (!task) {
        throw ApiError.notFound("Task not found")
    }

    await taskModel.deleteOne({ _id: taskId });
}

export {
    createTask,
    updateTask,
    deleteTask
}