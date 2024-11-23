import express from "express";

const app = express();

const port = 3000;


app.get("/", (req, res) => {
    try{
        const data = {
            title: "EJS Tags", 
            seconds: new Date().getSeconds(),
            items: [ "apple", "cherry", "banana" ],
            htmlContent: 
            "<em>This is some em text.</em>"
        };

        res.render("index.ejs", data);

    } catch(error){ console.error("Error: ", error); }

});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


