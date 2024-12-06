/* 
   CORS stands for Cross Origin Resource Sharing is a security feature implemented in web browsers
   to prevent web pages from making requests to a different origin(domain, protocal or port) 
   than the one the web page was loaded from.
   This is a built-in security mechanism to prevent malicious scripts from making 
   unauthorized requests on behalf of the user.
*/

import express from "express";
// importing CORS module
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

/// There are many ways to use CORS some are:
// First: setting up CORS as a middleware through this we enable all CORS requests
// app.use(cors());

// Third: setting up CORS as a Configuration using Whitelisting Dynamic Origin
const whitelist = [`http://localhost:${port}`, process.env.ALLOWED_ORIGINS];
// put corsOption object in cors() function in middleware
const corsOption = {
    origin : (origin, callback) => {
        if (whitelist.indexOf(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}
app.use(cors(corsOption));

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

// Second: setting up CORS in route as a config to enable CORS for a single route
// Always follow URL Standards and API Versioning
app.get("/api/indexes",/* cors(), */(req, res) => {
    const Indexes = [
        {
            id: 1,
            title: "First Index",
            content: "This is First Index"
        },
        {
            id: 2,
            title: "Second Index",
            content: "This is Second Index"
        },
        {
            id: 3,
            title: "Third Index",
            content: "This is Third Index"
        },
        {
            id: 4,
            title: "Fourth Index",
            content: "This is Fourth Index"
        },
        {
            id: 5,
            title: "Fifth Index",
            content: "This is Fifth Index"
        },
    ]

    res.json(Indexes);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
