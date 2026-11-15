
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or connect to the shared SQLite database
const dbPath = path.join(__dirname, '..', 'costumecloset.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to CostumeCloset SQLite database.');
    }
});

// Enable foreign key constraints
db.run('PRAGMA foreign_keys = ON');

module.exports = db;
