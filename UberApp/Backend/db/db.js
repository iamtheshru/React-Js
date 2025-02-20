const mongoose = require('mongoose');
function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
}

module.exports = connectToDb;