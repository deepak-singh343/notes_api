const User=require('../models/users');
module.exports.create=async function(req,res)
{
    const user=new User({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    });
    try{
        const newUser=await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}