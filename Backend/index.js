require("dotenv").config();
const PORT = process.env.port;
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/users.routes");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the AYUSHMAN HOSPITAL");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Coonected to the database");
  } catch (err) {
    console.log("err", err);
  }
  console.log(`Server is live at PORT : ${PORT}`);
});
