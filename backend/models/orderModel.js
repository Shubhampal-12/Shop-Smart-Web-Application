import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      image: Array,
      size: String,
      quantity: Number,
    },
  ],
  amount: Number,
  address: Object,
  paymentMethod: String,
  payment: Boolean,
  status: String,
  date: Number,
});

export default mongoose.model("Order", orderSchema);
