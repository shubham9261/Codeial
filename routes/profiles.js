const express = require('express');
const router = express.Router();
const profileController=require('../controllers/profile_controller');
console.log("profile loaded");
router.get('/',profileController.profile);
module.exports=router;
