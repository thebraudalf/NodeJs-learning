import express from "express";

const app = express();

const port = 4000;

// get property is used to get http request with some endpoints like "/"
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send(`<h1>Contact Me</h1>
        <p>My contact no. is xxxxxxxxxx.</p>`);
});

app.get("/about", (req, res) => {
    res.send(`<h1>About Me</h1>
        <p>My name is User</p>`);
});


app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});

