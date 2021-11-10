const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'List all courses' 
    })
})

router.get('/:id', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'Get a specific course' 
    })
})

router.post('/', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'Course created' 
    })
})

router.put('/:id', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'Course updated' 
    })
})

router.delete('/:id', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'Course deleted' 
    })
})

module.exports = router;