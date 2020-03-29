const express=require('express');
const router=express.Router();
// const passport=require('passport');
const getNotecontroller=require('../controllers/getNote_controller');
router.get('/',getNotecontroller.getNote);
// router.get('/:id',passport.authenticate('jwt',{session:false}),getNotecontroller.getNote);
module.exports=router;