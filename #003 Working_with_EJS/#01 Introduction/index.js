import express from "express";

const app = express();

const port = 3000;


app.get("/", (req, res) => {
    try {

        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        console.log(dayOfWeek); // through this we get day of week in (0-6) range

        var type = "a weekday";
        var adv = "time to do some hard work!";

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            type = "a weekend";
            adv = "time to enjoy!";
        }

        // render() method is used to generate HTML on the server and send it to the client.
        res.render("index.ejs", { dayType: type, advice: adv, });

    } catch (error) { console.log("Error: ", error); }
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

