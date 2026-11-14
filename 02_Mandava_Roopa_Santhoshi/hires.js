
const express = require('express');
const router = express.Router();

const db = require('../01_Kolla_Indhu/database');

// GET all hires
router.get('/', (req, res) => {
    db.all('SELECT * FROM hires', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
});

// GET hire details using JOIN
router.get('/details', (req, res) => {
    const query = `
        SELECT
            hires.id AS hire_id,
            actors.name AS actor_name,
            costumes.name AS costume_name,
            costumes.era,
            hires.hire_date,
            hires.return_date,
            hires.status
        FROM hires
        JOIN actors ON hires.actor_id = actors.id
        JOIN costumes ON hires.costume_id = costumes.id
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
});

// GET hire by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM hires WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ message: 'Hire not found' });
        }

        res.status(200).json(row);
    });
});

module.exports = router;
