const Note=require('../models/notes');
const User=require('../models/users');
module.exports.getNote=async function(req,res)
{
    try{
             let users=await User.findById(req.params.id).select('name').populate({path: 'notes', select:'content'})   //{path: 'notes', options: {sort: {createdAt: -1}},select: 'content'}
             console.log('Users',users);
            return res.status(200).json({
                message:"My Notes",
                users:users
            });
    }
    catch(err)
    {
        return res.status(500).json({
            message:err.message
        });
    }
}
