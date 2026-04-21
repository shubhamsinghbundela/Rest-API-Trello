import ApiError from "../../common/utils/api-error.js";
import orgModel from "./org.model.js";

const createOrganisation = async (req) => {
    const orgExist = await orgModel.findOne({
        orgName: req.body.orgName
    });

    if(orgExist){
        throw ApiError.forbidden("Organisation already exists");
    }

    const newOrg = await orgModel.create({
        orgName: req.body.orgName,
        description: req.body.description,
        admin: req.userId,
        member: []
    })

    return newOrg;
}

export {
    createOrganisation
}