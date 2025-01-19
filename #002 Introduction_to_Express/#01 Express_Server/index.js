// Setting up express server

import express from "express";

// making anonymous function 
const app = express();

const port = 3000;

// listen() method is a method or application which is used to return a http.server
app.listen(port, () => {
    console.log(`Running our server on port ${port}.`);
});
