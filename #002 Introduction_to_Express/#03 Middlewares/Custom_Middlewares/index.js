import express from "express";

const app = express();

const port = 3000;

// custom middleware in function
function logger(req, res, next) {
    console.log("Requested Method", req.method);
    console.log("Requested URL", req.url);
    next();
}

// we don't use parenthesis for calling middleware function 
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
