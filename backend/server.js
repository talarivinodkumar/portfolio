const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db'
};

/**
 * Initializes the database and starts the server.
 */
async function initializeApp() {
    try {
        console.log('--- Initializing Portfolio Backend ---');
        
        // 1. Connect to MySQL to ensure Database exists
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
        console.log(`[OK] Database "${dbConfig.database}" verified.`);
        await connection.end();

        // 2. Connect to the specific database
        const pool = mysql.createPool({
            ...dbConfig,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // 3. Create Leads Table
        // 3. Create Leads Table (To store visitor messages)
        const createLeadsTable = `
            CREATE TABLE IF NOT EXISTS leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                project_type VARCHAR(100),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createLeadsTable);
        console.log('[OK] Leads table ready.');

        app.locals.db = pool;

        // 4. API Routes
        app.post('/api/leads', async (req, res) => {
            const { from_name, email, project_type, message } = req.body;
            
            if (!from_name || !email || !message) {
                return res.status(400).json({ status: 'error', message: 'Name, Email, and Message are required' });
            }

            try {
                const db = app.locals.db;
                await db.execute(
                    'INSERT INTO leads (name, email, project_type, message) VALUES (?, ?, ?, ?)',
                    [from_name, email, project_type, message]
                );

                res.status(201).json({ 
                    status: 'success', 
                    message: 'Lead saved successfully to database!' 
                });
            } catch (error) {
                console.error('[DB Error]:', error);
                res.status(500).json({ status: 'error', message: 'Failed to save lead to database' });
            }
        });

        app.get('/health', (req, res) => {
            res.status(200).json({ status: 'online', timestamp: new Date().toISOString() });
        });

        // 5. Start Server
        app.listen(PORT, () => {
            console.log(`[SUCCESS] Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('[CRITICAL] Initialization failed:', error.message);
        process.exit(1);
    }
}

initializeApp();
