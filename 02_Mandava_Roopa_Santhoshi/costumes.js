
const express = require('express');
const router = express.Router();

const {
    getAllCostumes,
    getCostumeById,
    addCostume,
    updateCostume,
    deleteCostume
} = require('./costumeController');

const {
    validateCostume,
    validateEra
} = require('../03_N_Dhivija/validation');

const searchCostumesByEra = require('../03_N_Dhivija/eraValidation');

// Search costumes by era
router.get('/search', validateEra, searchCostumesByEra);

// GET all costumes
router.get('/', getAllCostumes);

// POST new costume
router.post('/', validateCostume, addCostume);

// PUT update costume
router.put('/:id', validateCostume, updateCostume);

// DELETE costume
router.delete('/:id', deleteCostume);

// GET costume by ID
router.get('/:id', getCostumeById);

module.exports = router;
