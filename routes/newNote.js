const express=require('express');
const router=express.Router();
const newNote_controller=require('../controllers/newNote_controller');
router.post('/',newNote_controller.create);
module.exports=router;