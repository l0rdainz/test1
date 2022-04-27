const express = require('express');
const connectDB = require('./config/db');
const books = require('./routes/api/books.js');
const users = require('./routes/api/users.js');
const experiments = require('./routes/api/experiments.js');
const orders = require('./routes/api/orders.js');
const recipes = require('./routes/api/recipes.js');
const shops = require('./routes/api/shops.js');
const simulatorresults = require('./routes/api/simulatorresults.js');
const app = express();
connectDB();
app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.json())
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/exps', experiments);
app.use('/api/orders', orders);
app.use('/api/recipes', recipes);
app.use('/api/shops', shops);
app.use('/api/simu', simulatorresults);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));