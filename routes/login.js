const express=require('express');
const router=express.Router();
const login_controller=require('../controllers/login_controller');
router.post('/',login_controller.createSession);
module.exports=router;