import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

let jsonData;

const recipeJSON = '[{ "id": "0001", "type": "taco", "name": "Chicken Taco", "price": 2.99, "ingredients": { "protein": { "name": "Chicken", "preparation": "Grilled" }, "salsa": { "name": "Tomato Salsa", "spiciness": "Medium" }, "toppings": [{ "name": "Lettuce", "quantity": "1 cup", "ingredients": ["Iceberg Lettuce"] }, { "name": "Cheese", "quantity": "1/2 cup", "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"] }, { "name": "Guacamole", "quantity": "2 tablespoons", "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"] }, { "name": "Sour Cream", "quantity": "2 tablespoons", "ingredients": ["Sour Cream"] }] } }, { "id": "0002", "type": "taco", "name": "Beef Taco", "price": 3.49, "ingredients": { "protein": { "name": "Beef", "preparation": "Seasoned and Grilled" }, "salsa": { "name": "Salsa Verde", "spiciness": "Hot" }, "toppings": [{ "name": "Onions", "quantity": "1/4 cup", "ingredients": ["White Onion", "Red Onion"] }, { "name": "Cilantro", "quantity": "2 tablespoons", "ingredients": ["Fresh Cilantro"] }, { "name": "Queso Fresco", "quantity": "1/4 cup", "ingredients": ["Queso Fresco"] }] } }, { "id": "0003", "type": "taco", "name": "Fish Taco", "price": 4.99, "ingredients": { "protein": { "name": "Fish", "preparation": "Battered and Fried" }, "salsa": { "name": "Chipotle Mayo", "spiciness": "Mild" }, "toppings": [{ "name": "Cabbage Slaw", "quantity": "1 cup", "ingredients": ["Shredded Cabbage", "Carrot", "Mayonnaise", "Lime Juice", "Salt"] }, { "name": "Pico de Gallo", "quantity": "1/2 cup", "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"] }, { "name": "Lime Crema", "quantity": "2 tablespoons", "ingredients": ["Sour Cream", "Lime Juice", "Salt"] }] } }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { recipeData : jsonData });
});

app.post("/recipe", (req, res) => {
  const choicedValue = req.body["choice"];

  switch (choicedValue) {
    case "chicken": jsonData = JSON.parse(recipeJSON)[0];
      break;

    case "beef": jsonData = JSON.parse(recipeJSON)[1];
      break;

    case "fish": jsonData = JSON.parse(recipeJSON)[2];
      break;

    default:
      break;
  }

  res.redirect("/");

  // if (choicedValue === "chicken") { jsonData = recipeJSON[0]; }
  // else if (choicedValue === "beef") { jsonData = recipeJSON[1]; }
  // else { jsonData = recipeJSON[2]; }

  // res.render("index.ejs", { recipeData : jsonData });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
