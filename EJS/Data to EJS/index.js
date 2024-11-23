import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const _bodyParser = bodyParser.urlencoded({ extended: true });
app.use(_bodyParser);


app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.post("/submit", (req, res) => {
    res.render("index.ejs", { letterCount: req.body["fName"].length + req.body["lName"].length });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

