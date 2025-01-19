import express from "express";
// importing morgan from morgan 
import morgan from "morgan";

const app = express();

const port = 3000;

// morgan() method is used as an HTTP request logger, making it easier to understand the traffic NodeJs server is handling 
// combined is a predefined format for combined log output
app.use(morgan("combined"));

app.get("/submit", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

