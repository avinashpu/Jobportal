const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const cors = require('cors');

dotenv.config();

const app = express();

connectDB();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); 

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
