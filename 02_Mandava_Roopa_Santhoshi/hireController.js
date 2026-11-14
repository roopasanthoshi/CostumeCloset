
const db = require('../01_Kolla_Indhu/database');

// Get all hires
const getAllHires = (req, res) => {
    db.all('SELECT * FROM hires', [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(rows);
    });
};

// Get hire details using JOIN
const getHireDetails = (req, res) => {
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

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(rows);
    });
};

module.exports = {
    getAllHires,
    getHireDetails
};
