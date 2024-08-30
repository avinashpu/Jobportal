const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

const corsOptions = {
    origin: '*',  
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
