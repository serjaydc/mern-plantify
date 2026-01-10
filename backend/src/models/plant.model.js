import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    perenualId: { type: Number, required: true, unique: true },
    name: String,
    image: String,
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
