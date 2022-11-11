require("dotenv").config();
const express = require("express");
const { urlencoded } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ket noi database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hanoifc_social_network", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.log("Connected to MongoDB failure!");
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
