const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    bio: {
      type: String,
      
    },
    password:{
        type: String,
        require: true,
    }
}, {timestamps: true})


const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel
 
export {}  