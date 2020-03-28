const express=require('express');
const router=express.Router();
const passport=require('passport');
const deleteNotecontroller=require('../controllers/deleteNote_controller');
router.delete('/:id',passport.authenticate('jwt',{session:false}),deleteNotecontroller.delete);
module.exports=router;