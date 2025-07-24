const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://surajkumar:963520@ecommerce.cpuyrxa.mongodb.net/")
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.port || 3000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
