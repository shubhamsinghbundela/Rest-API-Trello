import ApiError from "../../common/utils/api-error.js";
import userModel from "../auth/auth.model.js";
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

const addMember = async (req) => {
    const newMember = req.body.member;
    const newMemberUserId = await userModel.findOne({
        username: newMember
    })

    if(!newMemberUserId){
        throw ApiError.notFound("user not exist")
    }

    const orgDetails = await orgModel.findOne({
        admin: req.userId
    })

    if(!orgDetails){
        throw ApiError.notFound("org not exits")
    }

    const memberExistsInOrg = orgDetails?.member.includes(newMemberUserId._id);
    if(memberExistsInOrg){
        throw ApiError.notFound("Member already exists in org")
    }

    orgDetails.member.push(newMemberUserId);

    await orgDetails.save()

    return orgDetails;
}

export {
    createOrganisation,
    addMember
}