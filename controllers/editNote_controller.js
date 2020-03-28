const Note=require('../models/notes');
module.exports.update=async function(req,res)
{
    try{
        let note=await Note.findByIdAndUpdate(req.params.id);
        if(note.user==req.user.id)
        {
            
            note.content=req.body.content;
            console.log("note",note.content);
            note.save();
            return res.status(200).json({
                message:"Note updated"
            });
        }
        else
        {
            return res.status(401).json({
                message:"Note cannot be updated"
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