const mongoose=require('mongoose');
const notesSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
});
const Notes=mongoose.model('Notes',notesSchema);
module.exports=Notes;