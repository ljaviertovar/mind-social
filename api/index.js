const express = require('express');
const bodyParser = require('body-parser');

const config =  require('../config.js');
const user = require('./components/user/network.js');

const app = express();

app.use(bodyParser.json());

// ROUTER 
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('api listening...');
});