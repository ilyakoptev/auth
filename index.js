const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


//connect to DB
mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true
    },
    () => console.log('connected to db!'))


//middleware

app.use(express.json());

//route middleware

app.use("/api/user", authRoute); //  api/user/regsiter
app.use("/api/posts", postRoute)


app.listen(3002, () => console.log("Server up and running"));