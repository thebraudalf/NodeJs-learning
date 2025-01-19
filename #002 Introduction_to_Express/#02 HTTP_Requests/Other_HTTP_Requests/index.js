import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Home Page"));

// post request is used to send data to a server to create/update a resource using post http request  
app.post("/contactUs", (req, res) => res.sendStatus("201"));

// put property is used to replace data to a server to create/update a resource using put http request  
app.put("/user/braudalf", (req, res) => res.sendStatus("200"));

// patch property is used to partial modifications to a resource using patch http request
app.patch("/user/braudalf", (req, res) => res.sendStatus("200"));

// delete property is used to deletes the specified resource using delete http request
app.delete("/user/braudalf", (req, res) => res.sendStatus("200"));


app.listen(port, () => console.log(`Server is running on port ${port}`));
