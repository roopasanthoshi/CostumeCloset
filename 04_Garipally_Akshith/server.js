
const app = require('./app');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Initialize PostgreSQL database first
        await app.initializeDatabase();

        // Start server after successful initialization
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`CostumeCloset server running on port ${PORT}`);
        });

    } catch (err) {
        console.error('Failed to start server:', err.message);
        process.exit(1);
    }
};

startServer();
