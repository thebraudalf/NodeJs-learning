import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

var bandname;


app.use(bodyParser.urlencoded({ extended: true }));


function bandnameGenerator(req, res, next) {
    console.log(req.body);
    next();
}

app.use(bandnameGenerator);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    
    bandname = req.body["sname"] + req.body["pname"];

    res.send(`<h2>Your value is : </h2>
   <div><p>${bandname}👍</p></div>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
