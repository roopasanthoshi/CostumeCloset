
const db = require('../01_Kolla_Indhu/database');

// Search costumes by era
const searchCostumesByEra = async (req, res) => {
    try {
        const { era } = req.query;

        const result = await db.query(
            'SELECT * FROM costumes WHERE era = $1',
            [era]
        );

        res.status(200).json({
            message: 'Costumes retrieved successfully',
            count: result.rows.length,
            costumes: result.rows
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = searchCostumesByEra;
