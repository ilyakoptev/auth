const jwt = require('jsonwebtoken');

// add some middlewear  - add token to routes we want to protected 

function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send("Access Denied") // if we don't have a token 

    //verify the token we have 
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET); // get a '_id' back  (that we see in payload)
        req.user = verified;
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}