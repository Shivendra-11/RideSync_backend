const { select } = require('framer-motion/client');
const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({ 
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,"First name should be at least 3 characters long"]
        },
        lastname:{
            type: String,
            minlength:[3,"Last name should be at least 3 characters long"]
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength:[3,"Email should be at least 3 characters long"]
    },
    password:{
        type: String,
        required: true,
        select: false,
        // minlength:[6,"Password should be at least 6 characters long"]
    }, 
    socketId:{
        type: String,
    }, 



});
userSchema.methods.genrateAuthToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
};
user.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};
userSchema.static.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
};
const User = mongoose.model('User', userSchema);
module.exports = User;

