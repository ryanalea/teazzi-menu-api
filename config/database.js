const mongoose = require('mongoose');

// Fungsi koneksi ke MongoDB lokal
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/teazzi_db');
    console.log('MongoDB berhasil terhubung');
  } catch (error) {
    console.error(`Gagal terhubung ke MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
