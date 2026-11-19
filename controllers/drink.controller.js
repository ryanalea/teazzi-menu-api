const Drink = require('../models/drink.model');

// GET /api/drinks
const getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();

    res.status(200).json({
      message: 'Data menu minuman berhasil diambil',
      data: drinks,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil data menu minuman',
    });
  }
};

// GET /api/drinks/:id
const getDrinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findById(id);

    if (!drink) {
      return res.status(404).json({
        message: 'Menu minuman tidak ditemukan',
      });
    }

    res.status(200).json({
      message: 'Detail menu minuman berhasil diambil',
      data: drink,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil detail menu minuman',
    });
  }
};

// POST /api/drinks
const createDrink = async (req, res) => {
  try {
    const { namaMinuman, kategori, sugarLevel, harga, tersedia } = req.body;

    const drink = await Drink.create({
      namaMinuman,
      kategori,
      sugarLevel,
      harga,
      tersedia,
    });

    res.status(201).json({
      message: 'Menu minuman berhasil ditambahkan',
      data: drink,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menambahkan menu minuman',
    });
  }
};

// PUT /api/drinks/:id
const updateDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const { namaMinuman, kategori, sugarLevel, harga, tersedia } = req.body;

    const drink = await Drink.findByIdAndUpdate(
      id,
      {
        namaMinuman,
        kategori,
        sugarLevel,
        harga,
        tersedia,
      },
      { new: true }
    );

    if (!drink) {
      return res.status(404).json({
        message: 'Menu minuman tidak ditemukan',
      });
    }

    res.status(200).json({
      message: 'Menu minuman berhasil diperbarui',
      data: drink,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal memperbarui menu minuman',
    });
  }
};

// DELETE /api/drinks/:id
const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findByIdAndDelete(id);

    if (!drink) {
      return res.status(404).json({
        message: 'Menu minuman tidak ditemukan',
      });
    }

    res.status(200).json({
      message: 'Menu minuman berhasil dihapus',
      data: drink,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus menu minuman',
    });
  }
};

module.exports = {
  getDrinks,
  getDrinkById,
  createDrink,
  updateDrink,
  deleteDrink,
};
