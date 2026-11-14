
const db = require('../01_Kolla_Indhu/database');

// 1. Get all costumes
const getAllCostumes = (req, res) => {
    db.all('SELECT * FROM costumes', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
};

// 2. Get costume by ID
const getCostumeById = (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM costumes WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ message: 'Costume not found' });
        }

        res.status(200).json(row);
    });
};

// 3. Add a new costume
const addCostume = (req, res) => {
    const { name, era, description, price } = req.body;

    db.run(
        'INSERT INTO costumes (name, era, description, price) VALUES (?, ?, ?, ?)',
        [name, era, description, price],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: 'Costume added successfully',
                id: this.lastID
            });
        }
    );
};

// 4. Update costume
const updateCostume = (req, res) => {
    const { id } = req.params;
    const { name, era, description, price } = req.body;

    db.run(
        'UPDATE costumes SET name = ?, era = ?, description = ?, price = ? WHERE id = ?',
        [name, era, description, price, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: 'Costume not found' });
            }

            res.status(200).json({ message: 'Costume updated successfully' });
        }
    );
};

// 5. Delete costume
const deleteCostume = (req, res) => {
    const { id } = req.params;

    db.run('DELETE FROM costumes WHERE id = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Costume not found' });
        }

        res.status(200).json({ message: 'Costume deleted successfully' });
    });
};

module.exports = {
    getAllCostumes,
    getCostumeById,
    addCostume,
    updateCostume,
    deleteCostume
};
