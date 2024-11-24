// It is used to making server side API request using node native modules
// Also it is the old way for API request

import express from "express";
import bodyParser from "body-parser";
import https from "https";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    const options = {
        hostname: "https://bored-api.appbrewery.com",
        path: "/random",
        method: "GET",
    }

    const request = https.request(options, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            try {
                const result = JSON.parse(data);
                res.render("index.ejs", { data: result });
            } catch (error) {
                console.error("Failed to make request:", error.message);
                res.status(500).send("No activities that match your criteria.");
            }
        });
    });

    request.on("error", (error) => {
        console.error("Failed to make request:", error.message);
        res.status(500).send("No activities that match your criteria.");
    });

    request.end();
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
