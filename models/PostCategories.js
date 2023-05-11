import mongoose, { Schema } from "mongoose";

const PostCategoriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("PostCategories", PostCategoriesSchema);
