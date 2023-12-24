require('dotenv').config();
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();

const PORT = process.env.PORT

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb Connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`server started`));
