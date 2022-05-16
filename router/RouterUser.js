const express = require('express');
const User = require('../Models/User')
const router = express.Router();

router.post('/book-appointment', (req, res) => {
    const user = User(req.body);
    user.save();
    res.send({
        message: "Your appointment has been successfully created."
    });
})
module.exports = router 