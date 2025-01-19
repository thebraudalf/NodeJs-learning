// HINTS:
// 1. Import express and axios
import express from "express";
import ejs from "ejs";
import axios from "axios";


// 2. Create an express app and set the port number.
const app = express();
const port = 3000;


// 3. Use the public folder for static files.
app.use(express.static("public"));


// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {

    // 5. Use axios to get a random secret and pass it to index.ejs to display the
    // secret and the username of the secret.
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;

        res.render("index.ejs", { secret: result.secret, user: result.username });
    } catch (error) {
        console.log(error.message.data);
        res.status(404);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
});
