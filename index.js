const express = require('express');
const app = express();

router.post('/register', (req, res) => {
    res.send('Register')
})


app.listen(3000, () => console.log('Server up and running'));