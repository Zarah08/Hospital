let express = require('express');
let mongoose = require('mongoose');
let app = express();
require('./models/db');
let bodyParser=require('body-parser')

let userRoutes = require('./routes/mgmt')



app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(2900, () => {
    console.log('server is listening on port 2900');
});
