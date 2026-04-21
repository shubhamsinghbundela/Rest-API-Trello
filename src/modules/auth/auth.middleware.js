import jwt from "jsonwebtoken";

const authMiddleware = (req,res,next) => {
    const token = req.headers.token;
    const decode = jwt.verify(token, "shubham123");
    req.userId = decode.userId;
    next();
}

export default authMiddleware;