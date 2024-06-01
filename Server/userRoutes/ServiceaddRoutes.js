const express = require('express');
const router = express.Router();
const ServiceControl=require('../controller/ServiceController')


//routes using controller function

router.post('/createService',ServiceControl.createService)
router.get('/serviceView',ServiceControl.getService)
router.put('/update/:id', ServiceControl.updateService);
router.patch('/verified/:id', ServiceControl.patchUsers);
router.delete('/delete/:id', ServiceControl.deleteService);
router.get('/serviceView/:id',ServiceControl.onegetService) 



module.exports = router