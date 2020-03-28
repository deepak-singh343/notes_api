const express=require('express');
const router=express.Router();
router.use('/register',require('./register'));
router.use('/login',require('./login'));
router.use('/newNote',require('./newNote'));
router.use('/getNote',require('./getNote'));
router.use('/deleteNote',require('./deleteNote'));
router.use('/editNote',require('./editNote'));
module.exports=router;