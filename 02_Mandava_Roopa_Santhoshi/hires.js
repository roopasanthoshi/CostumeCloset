
const express = require('express');
const router = express.Router();

const db = require('../01_Kolla_Indhu/database');

// GET all hires
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM hires');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET hire details using JOIN
router.get('/details', async (req, res) => {
    try {
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

        const result = await db.query(query);
        res.status(200).json(result.rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET hire by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            'SELECT * FROM hires WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Hire not found'
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
