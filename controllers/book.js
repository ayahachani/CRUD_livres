const author = require("../models/author")
const Book=require("../models/book")
const fetchBooks=(req,res,next) =>{
    Book.find().populate('author').then((books)=> res.status(200).json({
     model:books,
     message:"success"
 }))
 .catch((error)=>{
     res.status(400).json({
         error:error.message,
         message:"Impossible d\'obtenir la liste des livres",
     })
 })
 }
 const getBookById=(req,res)=>{
    
    Book.findOne({_id:req.params.id}).populate('author').populate('category')
    .then((book)=>{
        if(!book){
            res.status(404).json({
                message:"Livre non trouvé",
            })
            return
        }
        res.status(200).json({
            model:book,
            message:"success"
        })
    } )
    .catch((error)=>{
        res.status(400).json({
            error:error.message,
            message:"Impossible d\'obtenir le livre",
        })
    })

}
const addBook=(req,res)=>{
    const book=new Book(req.body)
    book.save().then(()=>{
    res.status(201).json({
        model:book,
        message:"Livre crée !",
 } )})
 .catch((error)=>{
    res.status(400).json({
        error:error.message,
        message:"Impossible de créer le livre",
    })
})
}
const updateBook=(req,res)=>{
    Book.findOneAndUpdate({_id:req.params.id},
        req.body,{new:true})
        .then((book)=>{
            if(!book){
                res.status(404).json({
                    message:"Livre non trouvé",
                })
                return
            }else{
                res.status(200).json({
                    model:book,
                    message:"Livre modifié"
                })
            }
        })
        .catch((error)=>res.status(400).json({error:error.message}))
}
const deleteBook=(req,res)=>{
    Book.deleteOne({_id:req.params.id})
    .then(()=> res.status(200).json({message:"Livre supprimée"}))
    .catch((error)=>res.status(400).json({error}))
}
module.exports={
    fetchBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
}