const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    name: {type: String, required:true},
    surname: {type: String, required:true},
    cities: {type: String, required:true},
    school: {type: String, required:true},
    schoolname: {type: String, required:true},
    cinsiyet: {type: String, required:true},
    foto:{type: String, required:true},
    kapak_foto:{type:String, required:true}
});

module.exports = mongoose.model('user', userSchema)