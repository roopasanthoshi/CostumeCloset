
const express = require('express');
const router = express.Router();

const db = require('../01_Kolla_Indhu/database');

// GET all actors
router.get('/', (req, res) => {
    db.all('SELECT * FROM actors', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
});

// GET actor by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM actors WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ message: 'Actor not found' });
        }

        res.status(200).json(row);
    });
});

module.exports = router;
