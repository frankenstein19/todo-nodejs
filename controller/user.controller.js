
const UserServies  = require('../services/user.services');

exports.register = async (request, response, next)=> {
    try{
        const {email,password} = request.body;

        const successResponse = await UserServies.registerUser(email,password);

        response.json({status:true,message:"User Registered Successfully"});

    }catch(error){
       response.json({status:false,message:error.message});
    }
}

exports.login = async (request, response, next)=> {
    try{
        const {email,password} = request.body;

        const userExist = await UserServies.checkUser(email);

     
        if(!userExist){
            throw new Error("User does't exist");
        }
        const isMatch =  await userExist.comparePassword(password);

        if(!isMatch){
            throw new Error("Wrong email adress or password");
        }
        let tokenData = {_id:userExist._id, email:userExist.email};

        const token = await UserServies.generateToken(tokenData,"secretKey",'100h');

        response.json({status:true,message:"You have logged in Successfully",token:token,email:userExist.email});

    }catch(error){
       response.json({status:false,message:error.message});
    }
}