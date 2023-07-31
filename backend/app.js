const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/apiroutes');

const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
//ACA
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

const mongoConnect = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL
        )
        console.log('Mongo to connect' + 'on port' + process.env.PORT)
    } catch (err) {
        console.log(err)
        porecess.ext(1)
    }
}

app.use('/api', userRoutes);

mongoConnect();
module.exports = app;

