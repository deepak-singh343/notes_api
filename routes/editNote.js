const express=require('express');
const router=express.Router();
const passport=require('passport');
const editNotecontroller=require('../controllers/editNote_controller');
router.post('/:id',passport.authenticate('jwt',{session:false}),editNotecontroller.update);
module.exports=router;