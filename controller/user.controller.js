
const UserServies  = require('../services/user.services');

exports.register = async (request, response, next)=> {
    try{
        const {email,password} = request.body;

        const successResponse = await UserServies.registerUser(email,password);

        response.json({status:true,success:"User Registered Successfully"});

    }catch(error){
        throw error;
    }
}