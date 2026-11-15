
const validateCostume = (req, res, next) => {
    const { name, era, price } = req.body;

    if (!name || !era || price === undefined) {
        return res.status(400).json({
            error: 'Name, era and price are required'
        });
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({
            error: 'Price must be a positive number'
        });
    }

    next();
};

const validateEra = (req, res, next) => {
    const { era } = req.query;

    if (!era) {
        return res.status(400).json({
            error: 'Era is required'
        });
    }

    const allowedEras = ['Medieval', 'Modern', 'Fantasy'];

    if (!allowedEras.includes(era)) {
        return res.status(400).json({
            error: 'Invalid era. Allowed values: Medieval, Modern, Fantasy'
        });
    }

    next();
};

module.exports = {
    validateCostume,
    validateEra
};
