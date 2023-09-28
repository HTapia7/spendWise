import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Expenses = mongoose.models.expenses || mongoose.model("expenses", expensesSchema);

export default Expenses;
