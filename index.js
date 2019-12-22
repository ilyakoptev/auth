const express = require("express");
const app = express();
const mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb+srv://<ilya>:<niva7112609>@cluster0-7lt25.mongodb.net/test?retryWrites=true&w=majority')

//import routes
const authRoute = require("./routes/auth");

//route middleware

app.use("/api/user", authRoute); //  api/user/regsiter

app.listen(3001, () => console.log("Server up and running"));