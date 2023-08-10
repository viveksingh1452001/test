const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')

const Auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwttoken;
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verified._id, "tokens.token":token});
        if(!rootUser){
            throw new Error;
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    } catch (error) {
        res.status(401).send("unauthorized user")
    }
    
}

module.exports = Auth;