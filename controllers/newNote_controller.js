const Note=require('../models/notes');
module.exports.create=async function(req,res)
{
    const note=new Note({
        content:req.body.content,
        user:req.body.user
    });
    try{
        const newNote=await note.save();
        res.status(201).json(newNote);
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}    