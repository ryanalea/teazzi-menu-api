const express = require('express');
const connectDB = require('./config/database');
const drinkRoutes = require('./routes/drink.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Endpoint utama
app.get('/', (_req, res) => {
  res.json({
    message: 'API Menu Minuman Teazzi',
  });
});

// Route menu minuman
app.use('/api/drinks', drinkRoutes);

// Menjalankan server setelah database terhubung
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();
