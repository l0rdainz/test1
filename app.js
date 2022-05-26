const express = require('express');
var cors = require('cors') //this part needs to be edited before using it for prod
const connectDB = require('./config/db'); //connecting to the db
//importing all the exposed api endpoints here
const users = require('./routes/api/users.js'); //users collection, this is optional if you are intending to use auth0
const experiments = require('./routes/api/experiments.js'); 
const orders = require('./routes/api/orders.js');
const recipes = require('./routes/api/recipes.js');
const shops = require('./routes/api/shops.js');
const simulatorresults = require('./routes/api/simulatorresults.js');
const eggsbees = require('./routes/api/eggsbee.js');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
connectDB();
app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.json())
//exposing the endpoint on the backend server
app.use('/api/eggsbee', eggsbees);
app.use('/api/users', users);
app.use('/api/exps', experiments);
app.use('/api/orders', orders);
app.use('/api/recipes', recipes);
app.use('/api/shops', shops);
app.use('/api/simu', simulatorresults);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));