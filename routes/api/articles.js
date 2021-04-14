const express = require("express");
const router = express.Router();

const Articles = require ("../../models/Article");



//REQUEST GET ALL ARTCLES
router.get("/", (req, res)=>{

Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`));

});


//REQUEST ADD NEW ARTICLE  upload.single("articleImage"), 

router.post("/add", (req, res) =>{
    const newArticle =new Articles({
        title:req.body.title,
        article: req.body.article,
        authorname: req.body.authorname,
        articleImage: req.body.articleImage
    });

    newArticle
        .save()
        .then(()=> res.json("New article posted!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})

//REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
        .then((article) => res.json(article))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});


//REQUEST FIND ARTICLE BY ID AND UPDATE!
router.put("/update/:id",(req, res) => {
    Articles.findById(req.params.id)
        .then((article) => {
            article.title = req.body.title;
            article.article = req.body.article;
            article.authorname = req.body.authorname;
            article.articleImage = req.body.articleImage;

            article
                .save()
                .then(() => res.json("Article UPDATED!"))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

//REQUEST FIND ARTICLE BY ID AND DELETE!
router.delete("/:id", (req, res) => {

    Articles.findByIdAndDelete(req.params.id)
        .then(()=> res.json("The article is DELETED!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

module.exports = router