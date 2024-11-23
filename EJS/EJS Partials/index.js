import express from "express";

const app = express();
const port = 3000;

// .static() function is used to serves static files and is based on serve-static
app.use(express.static("public"));


app.get("/", (req, res) => res.render("index.ejs"));

app.get("/about", (req, res) => res.render("about.ejs"));

app.get("/contact", (req, res) => res.render("contact.ejs"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
