const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
