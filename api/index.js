const express = require('express');

const config =  require('../config.js');
const user = require('./components/user/network.js');

const app = express();

// ROUTER 
app.use('/api/user', user);

app.listen(config.api.por, () => {
    console.log('api listening...');
});