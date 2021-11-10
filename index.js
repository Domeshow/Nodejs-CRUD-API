const express = require('express');
require('dotenv').config();
const routes = require('./routes/index.js');

const app = express();

app.use('/api', routes);
app.get('/', (req, res)=>{
    res.status(200).send({ status: 200, message: `Welcome to the API. Go to http://localhost:${PORT}/api` })
});

app.use('**', (req, res)=>{
    res.status(200).send({ status: 405, message: 'Resource requested not found on the server' })
});

const PORT = process.env.PORT || 3800;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}. Go to http://localhost:${PORT}/api`);
})