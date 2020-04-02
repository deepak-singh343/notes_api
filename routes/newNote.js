const express=require('express');
const router=express.Router();
const passport=require('passport');
const newNote_controller=require('../controllers/newNote_controller');
router.post('/',passport.authenticate('jwt',{session:false}),newNote_controller.create);
module.exports=router;
