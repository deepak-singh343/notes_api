const Note=require('../models/notes');
module.exports.delete=async function(req,res)
{
    try{
        let note=await Note.findById(req.params.id);
        if(note.user==req.user.id)
        {
            note.remove();
            return res.status(200).json({
                message:"Note Deleted"
            });
        }
        else
        {
            return res.status(401).json({
                message:"Note cannot be deleted"
            });
        }
    }
    catch(err)
    {
        return res.status(500).json({
            message:err.message
        });
    }
}