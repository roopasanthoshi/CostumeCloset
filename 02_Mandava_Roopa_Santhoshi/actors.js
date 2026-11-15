
const express = require('express');
const router = express.Router();

const db = require('../01_Kolla_Indhu/database');

// GET all actors
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM actors');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET actor by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            'SELECT * FROM actors WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Actor not found'
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
