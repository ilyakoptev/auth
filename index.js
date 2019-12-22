const express = require("express");
const app = express();

//import routes
const authRoute = require("./routes/auth");

//route middleware

app.use("/api/user", authRoute); //  api/user/regsiter

app.listen(3001, () => console.log("Server up and running"));