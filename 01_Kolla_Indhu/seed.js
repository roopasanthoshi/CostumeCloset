
const db = require('./database');

const seedDatabase = async () => {
    try {
        // Insert sample actors
        await db.query(`
            INSERT INTO actors (id, name, email)
            VALUES
            (1, 'Arjun', 'arjun@gmail.com'),
            (2, 'Priya', 'priya@gmail.com'),
            (3, 'Rahul', 'rahul@gmail.com')
            ON CONFLICT DO NOTHING
        `);

        // Insert sample costumes
        await db.query(`
            INSERT INTO costumes (id, name, era, description, price)
            VALUES
            (1, 'Royal King Costume', 'Medieval', 'Traditional royal outfit', 1500),
            (2, 'Modern Police Costume', 'Modern', 'Police uniform', 1000),
            (3, 'Fantasy Warrior Costume', 'Fantasy', 'Warrior outfit with armor', 2000),
            (4, 'Medieval Queen Costume', 'Medieval', 'Royal queen outfit', 1800)
            ON CONFLICT DO NOTHING
        `);

        // Insert sample hires
        await db.query(`
            INSERT INTO hires
            (id, actor_id, costume_id, hire_date, return_date, status)
            VALUES
            (1, 1, 1, '2026-11-10', '2026-11-15', 'Hired'),
            (2, 2, 2, '2026-11-11', '2026-11-16', 'Hired'),
            (3, 3, 3, '2026-11-12', '2026-11-17', 'Returned')
            ON CONFLICT DO NOTHING
        `);

        // Reset ID sequences
        for (const table of ['actors', 'costumes', 'hires']) {
            await db.query(`
                SELECT setval(
                    pg_get_serial_sequence('${table}', 'id'),
                    COALESCE((SELECT MAX(id) FROM ${table}), 1),
                    true
                )
            `);
        }

        console.log('Sample data inserted successfully.');

    } catch (err) {
        console.error('Error inserting sample data:', err.message);
        throw err;
    }
};

module.exports = seedDatabase;
