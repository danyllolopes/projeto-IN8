const express = require('express');
const router = express.Router();

const UserController = require("./controller/UserController")

router.post('/user', UserController.postUser)
router.get('/users', UserController.getUser)

module.exports = router