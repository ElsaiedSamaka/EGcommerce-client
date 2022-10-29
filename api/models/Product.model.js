const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
    },
    rating: {
      type: Object,
    },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)