const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    adopted: {
      type: Boolean,
      default: false,
    },
    petImage: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = model("Pet", petSchema);
