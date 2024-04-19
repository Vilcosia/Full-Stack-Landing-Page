const express = require('express');
const user = require('../Controllers/register_login')

const router = express.Router()



router.post('/login',user.login);

router.post('/register',user.register);

module.exports = router;