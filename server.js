const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const whateverController = require('./controller/controller1');





app.get('/', (req, res) => {
    res.send("Home Sweet Home")
})









app.listen(3000, () => {
    console.log('Shhhhh can you hear the port?')
});

