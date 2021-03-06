const User=require('../models/users');
const jwt=require('jsonwebtoken');
module.exports.createSession=async function(req,res)
{
    try{
        let user=await User.findOne({email:req.body.email});
        if(!user||user.password!=req.body.password)
        {
            return res.status(422).json({
                message:"Invalid username or password"
            });
        }
        return res.status(200).json({
            message:'Sign in successfully',
            data:{
                token:jwt.sign(user.toJSON(),'notes_api',{expiresIn:'10000000'})
            }
        });
    }
    catch(err)
    {
        return res.json(500,{
            message:'Internal Server'
        })
    }
}