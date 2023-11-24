import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    target: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        default: 0
    },
    active:{
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;