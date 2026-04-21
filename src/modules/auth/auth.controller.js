import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./auth.service.js";

const signup = async (req, res, next) => {
  try {
    const user = await authService.signup(req.body);

    ApiResponse.ok(res, "User get Created", user);
  } catch (error) {
    next(error); // pass error to global error middleware
  }
};

const signin = async (req, res, next) => {
  try {
    const token = await authService.signin(req.body);
    ApiResponse.ok(res, "Signin successfully", token);
  } catch (error){
    next(error);
  }
}

export { signup, signin };
