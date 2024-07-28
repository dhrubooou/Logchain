import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  expecteddelivery: {
    type: Date,
    required: true,
  },
  quickdelivery: {
    type: Boolean,
    default: false,
  },
  deliverystatus: {
    type: String,
    default: "pending",
  },
});

const Inventory =
  mongoose.models.inventory || mongoose.model("inventory", inventorySchema);

export default Inventory;
