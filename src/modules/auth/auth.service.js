
import userModel from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";


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

export {
    signup
}