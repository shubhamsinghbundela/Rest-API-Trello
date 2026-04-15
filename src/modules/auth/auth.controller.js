import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./auth.service.js";

const signup = async (req, res) => {
    const user = await authService.signup(req.body);
    ApiResponse.ok(
      res,
      "User get Created",
      user,
    );
};

export { signup };
