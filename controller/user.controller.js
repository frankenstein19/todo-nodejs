
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
        console.log(`pass::2 ${isMatch}`);

        if(!isMatch){
            throw new Error("Wrong email adress or password");
        }
        console.log(`pass::3`);
        let tokenData = {_id:userExist._id, email:userExist.email};
        console.log(`pass::4 ${tokenData}`);

        const token = await UserServies.generateToken(tokenData,"secretKey",'1h');
        console.log(`pass::5 ${token}`);

        response.json({status:true,message:"You have logged in Successfully",token:token,email:userExist.email});

    }catch(error){
       response.json({status:false,message:error.message});
    }
}