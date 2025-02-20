const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Frist name must be at least 3 charaters long"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 charaters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String
    }
})



userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRECT)
    return token
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.hash(password, 10)
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};
const userModel = mongoose.model('user', userSchema);

module.exports = userModel
