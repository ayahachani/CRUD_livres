const mongoose=require("mongoose")
const {Schema}=mongoose
const bookSchema=Schema({
    title:{ 
        type:String,
        required:true,
    },
    author: { 
        type: Schema.Types.ObjectId,
        ref:'author'  
    },
    category: [{ 
        type: Schema.Types.ObjectId,
        ref:'category'  
    }],
    
})
module.exports= mongoose.model("Book",bookSchema)