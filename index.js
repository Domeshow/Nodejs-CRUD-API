const express = require('express');
const detenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3200;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}. Go to http://localhost:${PORT}`);
})