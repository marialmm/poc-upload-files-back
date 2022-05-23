import express from "express";
import cors from "cors";
import multer from "multer";
import chalk from "chalk";

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    dest: "./images/"
})

app.post("/images", 
    upload.array("image", 3), 
    (req, res)=> {
    console.log(req.files);
    const {name} = req.body;
    res.send(req.files);
});

app.listen(5000, ()=> {
    console.log(chalk.green('Server running on port 5000'));
})