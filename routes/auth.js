const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {
    registerValidation,
    loginValidation
} = require('../validation');
// validation 




router.post('/register', async(req, res) => {
    //lets validate the data before we make a user 
    const {
        error
    } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message); // return error if validation is fail 



    //checking if the user is already in the database 
    const emailExist = await User.findOne({
        email: req.body.email
    })
    if (emailExist) return res.status(400).send('Email already exists');

    //hash passwords
    const salt = await bcrypt.genSalt(10); // default kind  of crypting password
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create a new user 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.sent(savedUser);
    } catch (err) {
        res.status(400).send(err)
    }
});


module.exports = router;