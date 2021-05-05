const express = require('express');
require('dotenv').config({ path: './config/.env' });
require('./config/db')
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
//Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const testRoutes = require('./routes/test');
//Config App
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());



//Routes Midlleware
app.use('/api', authRoutes);
app.use('/auth', userRoutes);
app.use('/test', testRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`app is running on port ${port}`));
