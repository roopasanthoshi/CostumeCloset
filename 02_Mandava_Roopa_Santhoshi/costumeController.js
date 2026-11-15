
const db = require('../01_Kolla_Indhu/database');

// 1. Get all costumes
const getAllCostumes = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM costumes');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Get costume by ID
const getCostumeById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            'SELECT * FROM costumes WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Costume not found' });
        }

        res.status(200).json(result.rows[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. Add a new costume
const addCostume = async (req, res) => {
    try {
        const { name, era, description, price } = req.body;

        const result = await db.query(
            `INSERT INTO costumes (name, era, description, price)
             VALUES ($1, $2, $3, $4)
             RETURNING id`,
            [name, era, description, price]
        );

        res.status(201).json({
            message: 'Costume added successfully',
            id: result.rows[0].id
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. Update costume
const updateCostume = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, era, description, price } = req.body;

        const result = await db.query(
            `UPDATE costumes
             SET name = $1, era = $2, description = $3, price = $4
             WHERE id = $5`,
            [name, era, description, price, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Costume not found' });
        }

        res.status(200).json({
            message: 'Costume updated successfully'
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 5. Delete costume
const deleteCostume = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            'DELETE FROM costumes WHERE id = $1',
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Costume not found' });
        }

        res.status(200).json({
            message: 'Costume deleted successfully'
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllCostumes,
    getCostumeById,
    addCostume,
    updateCostume,
    deleteCostume
};
