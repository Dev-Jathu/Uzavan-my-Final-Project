const express = require('express');
const router = express.Router();
const userController = require('../Controllers/farmersControllers');
// Routes using controller functions
router.post('/register', userController.createUser);
router.get('/', userController.getUser);

module.exports = router;