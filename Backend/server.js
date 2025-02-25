import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js"

const app = express();
const PORT = 5700;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Default Route
app.get("/", (req, res) => {
    res.send("ShoppyGlobe API is running...");
  });  

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
    console.log("Succesfully connectin DB ");
});

db.on("error", () =>{
    console.log("Connection not successful");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

