import ApiResponse from '../../common/utils/api-response.js';
import * as taskService from './task.service.js'

const createTask = async (req, res, next) => {
    try{
        const data = await taskService.createTask(req);
        ApiResponse.ok(res, "Task created successfully", data)
    }catch (error) {
        next(error);
    }
}

const updateTask = async (req, res, next) => {
    try{
        const data = await taskService.updateTask(req);
        ApiResponse.ok(res, "Task updated successfully", data)
    }catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try{
        const data = await taskService.deleteTask(req);
        ApiResponse.ok(res, "Task deleted successfully", data)
    }catch(error) {
        next(error)
    }
}

export {
    createTask,
    updateTask,
    deleteTask
}