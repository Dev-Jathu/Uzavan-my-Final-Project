const express = require('express');
const router = express.Router();
const farmerControl=require('../controller/farmerControl')


//routes using controller function

router.post('/register',farmerControl.createfarmer)
router.get('/farmerView',farmerControl.getAllFarmer)
router.delete('/delete/:id',farmerControl.deleteFarmer)

module.exports = router