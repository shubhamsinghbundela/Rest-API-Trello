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
export {
    createTask
}