import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from "cors";

const connection_url =
  "mongodb+srv://admin:r2XPb9pOCY4Pu88c@cluster0.evlnw.mongodb.net/tinderdb?retryWrites=true&w=majority";

//app cpnfig
const app = express();
const port = process.env.PORT || 8001;

//middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Welcome to tinder clone");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, (req, res) => {
  console.log(`listening to port: ${port}`);
});
