import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"; 
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

var IsUserAuthorized = false;

app.use(bodyParser.urlencoded({ extended : true }));

// function to handle password 
function passwordHandle(req, res, next) {
    const password = req.body["password"];
    if (password === "Secret") {
        IsUserAuthorized = true;
    }
    next();
}

app.use(passwordHandle);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (IsUserAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    };
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
