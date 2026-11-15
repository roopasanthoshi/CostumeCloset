
const db = require('../01_Kolla_Indhu/database');

// Search costumes by era
const searchCostumesByEra = (req, res) => {
    const { era } = req.query;

    db.all(
        'SELECT * FROM costumes WHERE era = ?',
        [era],
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json({
                message: 'Costumes retrieved successfully',
                count: rows.length,
                costumes: rows
            });
        }
    );
};

module.exports = searchCostumesByEra;
