import express from "express";
// importing dirname from path
import { dirname } from "path";
// importing fileUrlToPath from url
import { fileURLToPath } from "url";
// importing bodyParser from body-parser
import bodyParser from "body-parser";

// fileURLToPath() method is used to convert a file URL to a platform specific file path
// It is more used when you need to work with file paths in a cross platform manner
// import.meta.url property of a ES modules, it provides absolute path to current modules
const __filename = fileURLToPath(import.meta.url);

// dirname() method is used to return the directories of a file path 
const __dirname = dirname(__filename);

const app = express();

const port = 3000;

// bodyParser middleware is used for parsing the incoming request bodies in a middleware before handling 
// urlencoded() method is used to parses the incoming requests with URL-encoded payloads
// extended is an property which is allows us to choose between parsing the URL-encoded data in true or false 
const _bodyParser = bodyParser.urlencoded({ extended: true });

// use() method is used to mount the specified middleware function at the path that is being specified
app.use(_bodyParser);

app.get("/", (req, res) => {
    // .sendFile() method is used to transfer the file at the given path and it sets the content-type response HTTP header on the filename extension
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    // .body property is used to handle data sent in the body of HTTP requests  
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
