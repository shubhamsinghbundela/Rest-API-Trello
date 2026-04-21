
import userModel from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";
import jwt from "jsonwebtoken";

const signup = async({username, password}) => {

    const userExists = await userModel.findOne({
        username: username
    })

    console.log('userExists', userExists)

    if(userExists){
       throw ApiError.forbidden("User Already Exists")
    }

    const newUser = await userModel.create({
        username: username,
        password: password
    })

    return newUser;
}

const signin = async({username, password}) => {
    const userExists = await userModel.findOne({
        username: username,
        password: password
    })

    if(!userExists){
        throw ApiError.notFound("User not found");
    }

    const token = jwt.sign(
        {
            userId: userExists.id
        },
        "shubham123"
    )

    return token;
}

export {
    signup,
    signin
}