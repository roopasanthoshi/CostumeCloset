
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const db = require('../01_Kolla_Indhu/database');

// Import member contributions
const costumeRoutes = require('../02_Mandava_Roopa_Santhoshi/costumes');
const actorRoutes = require('../02_Mandava_Roopa_Santhoshi/actors');
const hireRoutes = require('../02_Mandava_Roopa_Santhoshi/hires');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/costumes', costumeRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/hires', hireRoutes);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to CostumeCloset API'
    });
});

// Initialize PostgreSQL database
app.initializeDatabase = async () => {
    try {
        const schemaPath = path.join(
            __dirname,
            '../01_Kolla_Indhu/schema.sql'
        );

        const schema = fs.readFileSync(schemaPath, 'utf8');

        // Create database tables
        await db.query(schema);

        console.log('Database tables created successfully.');

        // Insert sample data
        const seedDatabase = require('../01_Kolla_Indhu/seed');
        await seedDatabase();

        console.log('CostumeCloset application initialized.');

    } catch (err) {
        console.error('Database initialization error:', err.message);
        throw err;
    }
};

module.exports = app;
