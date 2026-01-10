import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/database.js";
import plantRoutes from "./routes/plant.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/plants", plantRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port:", process.env.PORT);
  });
});
