const express = require('express');
const app = express();

//import routes
const authRoute = require('./routes/auth');




app.listen(3000, () => console.log('Server up and running'));