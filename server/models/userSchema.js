const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        console.log("pre password")
        this.password =await bcrypt.hash(this.password, 12),
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function(){
    try {
        let newtoken = jwt.sign({_id: this._id},process.env.SECRET_KEY,{expiresIn:60})
        console.log(newtoken)
        this.tokens = this.tokens.concat({token: newtoken})
        await this.save();
        return newtoken;
    } catch (error) {
        console.log(error)
    }
}



const User = mongoose.model('USER', userSchema)
module.exports = User;