class ApiError extends Error {
    //inherits from JavaScript’s built-in Error
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        // this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message = "Bad request") {
        return new ApiError(400, message);
    }

    static forbidden(message = "forbidden") {
        return new ApiError(403, message);
    }

    static notFound(message = "Not found") {
        return new ApiError(404, message);
    }
}

export default ApiError;