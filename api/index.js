const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')
;
const config =  require('../config.js');
const user = require('./components/user/network.js');

const app = express();

const swaggerDoc = require('./swagger.json');

app.use(bodyParser.json());

// ROUTER 
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log('api listening...');
});