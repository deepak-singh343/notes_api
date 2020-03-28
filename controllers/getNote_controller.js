const Note=require('../models/notes');
const User=require('../models/users');
module.exports.getNote=async function(req,res)
{
    let notes=await Note.find({})
    .sort('-createdAt')
    .populate('user')
    return res.status(200).json({
        message:"My Notes",
        notes:notes
    })
}