
const db = require('../01_Kolla_Indhu/database');

// Get all hires
const getAllHires = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM hires');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// Get hire details using JOIN
const getHireDetails = async (req, res) => {
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
            INNER JOIN actors
                ON hires.actor_id = actors.id
            INNER JOIN costumes
                ON hires.costume_id = costumes.id
        `;

        const result = await db.query(query);
        res.status(200).json(result.rows);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    getAllHires,
    getHireDetails
};
