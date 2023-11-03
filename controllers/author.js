const Author=require("../models/author")


exports.addAuthor= async (req,res)=>{
    const author=new Author(req.body)
    await author.save();
    res.status(201).json({
        model:author,
        message:"Auteur crée !",
 } )
 .catch((error)=>{
    res.status(400).json({
        error:error.message,
        message:"Impossible de créer l'auteur",
    })
})
}


exports.addAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        
        res.status(201).json({
            model: author,
            message: "Auteur créé !",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: "Impossible de créer l'auteur",
        });
    }
};



// exports.addAuthor=(req,res)=>{
//     const author=new Author(req.body)
//     author.save().then(()=>{
//     res.status(201).json({
//         model:author,
//         message:"Auteur crée !",
//  } )})
//  .catch((error)=>{
//     res.status(400).json({
//         error:error.message,
//         message:"Impossible de créer l'auteur",
//     })
// })
// }
// exports.fetchAuthor=(req,res,next) =>{
//     Author.find().then((authors)=> res.status(200).json({
//      model:authors,
//      message:"success"
//  }))
//  .catch((error)=>{
//      res.status(400).json({
//          error:error.message,
//          message:"Impossible d\'obtenir la liste des authors",
//      })
//  })
//  }