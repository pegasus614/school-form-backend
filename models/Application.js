const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true,
      min: 1
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"]
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      required: true,
      trim: true
    },

    schoolEmail: {
      type: String,
      required: true,
      trim: true
    },

    personalEmail: {
      type: String,
      required: true,
      trim: true
    },

    bank: {
      type: String,
      required: true,
      trim: true
    },

    depositLimit: {
      type: String,
      required: true,
      trim: true
    },

    applicationJob: {
      type: String,
      required: true,
      enum: ["Errand Assistant", "Childcare Supply Personnel"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Application", applicationSchema);