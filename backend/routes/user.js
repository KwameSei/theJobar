const express = require('express');
const router = express.Router();

router.get('/get_users', (req, res) => {
    res.send('Users list');
})

module.exports = router;