const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema(
  {
    namaMinuman: {
      type: String,
      required: true,
      trim: true,
    },
    kategori: {
      type: String,
      required: true,
      trim: true,
    },
    sugarLevel: {
      type: String,
      required: true,
      trim: true,
    },
    harga: {
      type: Number,
      required: true,
      min: 0,
    },
    tersedia: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
