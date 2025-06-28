const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./db');
const studentRoutes = require('./studentRoutes'); // Fixed path

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
