const express = require('express');
const router = express.Router();
const drinkController = require('../controllers/drink.controller');

// Mengambil semua menu minuman
router.get('/', drinkController.getDrinks);

// Mengambil satu menu minuman berdasarkan ID
router.get('/:id', drinkController.getDrinkById);

// Menambahkan menu minuman
router.post('/', drinkController.createDrink);

// Mengubah menu minuman
router.put('/:id', drinkController.updateDrink);

// Menghapus menu minuman
router.delete('/:id', drinkController.deleteDrink);

module.exports = router;
