import ApiResponse from "../../common/utils/api-response.js";
import * as orgService from "./org.service.js";

const createOrganisation = async (req, res, next) => {
  try {
    const org = await orgService.createOrganisation(req)
    ApiResponse.ok(res, "Org get created", org);
  } catch (error) {
    next(error);
  }
};

export {
    createOrganisation
}