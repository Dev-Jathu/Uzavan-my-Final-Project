const express = require('express');
const router = express.Router();
const ServiceControl=require('../controller/ServiceController')


//routes using controller function

router.post('/createService',ServiceControl.createService)
router.get('/serviceView',ServiceControl.getService)
router.put('/update/:id', ServiceControl.updateUser);
router.patch('/verified/:id', ServiceControl.patchUsers);
router.patch('/delete/:id', ServiceControl.deleteService);



module.exports = router