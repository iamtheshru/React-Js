const userModel = require('../models/user.model');

module.exports.createUser = async ({
    fristname, lastname, email, password
}) => {
    if (!fristname || !lastname || !email || !password) {
        throw new Error('Please fill in all fields');
    }

    const user = userModel.create({
        fullname: {
            fristname,
            lastname
        },
        email,
        password
    })
    return user;
}