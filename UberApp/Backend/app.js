const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectTpDb = require('./db/db');
const userRouters = require('./routes/user.routers')

connectTpDb();
app.use(cors()) //domin male tyare use karishu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/users', userRouters)

module.exports = app;