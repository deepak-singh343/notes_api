const express=require('express');
const router=express.Router();
const getNotecontroller=require('../controllers/getNote_controller');
router.get('/',getNotecontroller.getNote);
module.exports=router;