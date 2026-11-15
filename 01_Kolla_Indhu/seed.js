
const db = require('./database');

// Insert sample actors
db.run(`
    INSERT OR IGNORE INTO actors (id, name, email)
    VALUES
    (1, 'Arjun', 'arjun@gmail.com'),
    (2, 'Priya', 'priya@gmail.com'),
    (3, 'Rahul', 'rahul@gmail.com')
`);

// Insert sample costumes
db.run(`
    INSERT OR IGNORE INTO costumes (id, name, era, description, price)
    VALUES
    (1, 'Royal King Costume', 'Medieval', 'Traditional royal outfit', 1500),
    (2, 'Modern Police Costume', 'Modern', 'Police uniform', 1000),
    (3, 'Fantasy Warrior Costume', 'Fantasy', 'Warrior outfit with armor', 2000),
    (4, 'Medieval Queen Costume', 'Medieval', 'Royal queen outfit', 1800)
`);

// Insert sample hires
db.run(`
    INSERT OR IGNORE INTO hires (id, actor_id, costume_id, hire_date, return_date, status)
    VALUES
    (1, 1, 1, '2026-11-10', '2026-11-15', 'Hired'),
    (2, 2, 2, '2026-11-11', '2026-11-16', 'Hired'),
    (3, 3, 3, '2026-11-12', '2026-11-17', 'Returned')
`, (err) => {
    if (err) {
        console.error('Error inserting sample data:', err.message);
    } else {
        console.log('Sample data inserted successfully.');
    }
});
