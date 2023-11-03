const express=require("express")
const router= express.Router()
const authorController=require("../controllers/author")

 // Créer un nouveau autheur
 router.post("/",authorController.addAuthor)
 router.post("/",authorController.fetchAuthor)
 module.exports=router