const Note=require('../models/notes');
const User=require('../models/users');
module.exports.createNote=async function(req,res)
{
    try {
        // const user = await User.findOne({_id:req.body.user});
        const user = await User.findOne({_id:req.user});
        if(!user){
            throw new Error("User is Not Found.");
        }
        const newNote = await Note.create({
            content:req.body.content,
            user: req.body.user,
            // user: req.user
        })
        user.notes.push(newNote);
        user.save();
        console.log(user);
        return res.json({success: true, message: "note added Successfully!!"});

    } catch (e) {
        console.error("Error while adding new note.");
        return res.json({success: false, message: "Error while adding note." + e});
    }
}    
