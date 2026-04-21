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

export {
    createTask
}