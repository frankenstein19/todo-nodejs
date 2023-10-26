
const UserModel = require('../model/user.model')
const Jwt = require('jsonwebtoken')

class UserServies {
static async registerUser(email,password){
    try{
      const createUser = new UserModel({email,password});
      return await createUser.save();
    }
    catch(error){
        throw error;
    }
}

static async checkUser(email){
    try{
     return await UserModel.findOne({email});
    }
    catch(error){
        throw error;
    }
}

static async generateToken(tokenData,secretKey,jwtExpire){
    return Jwt.sign(tokenData,secretKey,{expiresIn:jwtExpire});
}

}

module.exports = UserServies;
