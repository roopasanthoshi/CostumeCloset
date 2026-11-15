
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const db = require('../01_Kolla_Indhu/database');

// Import member contributions
const costumeRoutes = require('../02_Mandava_Roopa_Santhoshi/costumes');
const actorRoutes = require('../02_Mandava_Roopa_Santhoshi/actors');
const hireRoutes = require('../02_Mandava_Roopa_Santhoshi/hires');

const searchCostumesByEra = require('../03_N_Dhivija/eraValidation');
const { validateEra } = require('../03_N_Dhivija/validation');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/costumes', costumeRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/hires', hireRoutes);

// Search costumes by era
app.get('/api/costumes/search', validateEra, searchCostumesByEra);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to CostumeCloset API'
    });
});

// Create database tables before starting the server
const schemaPath = path.join(
    __dirname,
    '../01_Kolla_Indhu/schema.sql'
);

const schema = fs.readFileSync(schemaPath, 'utf8');

db.exec(schema, (err) => {
    if (err) {
        console.error('Database schema error:', err.message);
        return;
    }

    console.log('Database tables created successfully.');

    // Insert sample data after tables are created
    require('../01_Kolla_Indhu/seed');

    console.log('CostumeCloset application initialized.');
});

module.exports = app;
