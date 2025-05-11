const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const cardRoutes = require("./routes/cards"); // ✅ this loads cards.js from /routes

const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/jwt-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error", err));

// ✅ Use routes
app.use("/", authRoutes);       // e.g., POST /login, POST /register
app.use("/cards", cardRoutes);  // e.g., GET /cards

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));