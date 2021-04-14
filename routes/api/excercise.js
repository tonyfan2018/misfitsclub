const express = require("express");
const router = express.Router();
const multer = require("multer");
const Excercise = require ("../../models/Excercise");

const storage = multer.diskStorage({
    destination:(req, file, callback) =>{
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});


router.get("/", (req, res)=>{

    Excercise.find()
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json(`Error: ${err}`));

});




router.post("/add", upload.single("excerciseImage"), (req, res) =>{
    const newExcercise =new Excercise({
    excerciseVideo:req.body.excerciseVideo,
    title:req.body.title,
    introduction:req.body.introduction,
    excerciseImage:req.file.originalname
       
    });

    newExcercise
        .save()
        .then(()=> res.json("New excercise posted!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
})


router.get("/:id", (req, res) => {
    Excercise.findById(req.params.id)
        .then((excercise) => res.json(excercise))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});



router.put("/update/:id",upload.single("excerciseImage"), (req, res) => {
    Articles.findById(req.params.id)
        .then((excercise) => {
            excercise.excerciseVideo= req.body.excerciseVideo;
            excercise.title = req.body.title;
            excercise.introduction = req.body.introduction;
            excercise.excerciseImage = req.file.originalname;

            excercise
                .save()
                .then(() => res.json("Excercise UPDATED!"))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));

});


router.delete("/:id", (req, res) => {

    Excercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json("The excercise is DELETED!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

module.exports = router