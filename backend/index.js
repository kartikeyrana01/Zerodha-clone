const express = require("express");
const app = express();
require("dotenv").config();

// ---------- External Middlewares ----------
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// ---------- Models ----------
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrdersModel");

// ---------- Mongo & Config ----------
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
console.log(uri,"this is port")

// ---------- Use Middlewares ----------
app.use(cors());
app.use(bodyParser.json()); // or app.use(express.json());
app.use(cookieParser());
app.use(express.json());

// ---------- Routes ----------
const authRoutes = require("./Routes/AuthRoute");
app.use("/api/auth", authRoutes);

// ---------- Mongo Connection ----------
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((err) => console.error(" Mongo connection error:", err));


  
// ---------- API Endpoints ----------
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.json({ message: "Order saved" });
});

// ---------- Server Start ----------
// app.listen(PORT, () => {
//   console.log(` Server running on http://localhost:${PORT}`);
// });
mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Mongo connection error:", err));
