const express = require('express');
const router = express.Router();
const Course = require('../models/Course')

router.get('/', async (req, res)=>{
    try{
        const courses = await Course.find();
        res.status(200).send({ 
            status: 200, 
            courses: courses 
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            error: err.errors
        })
    }
})

router.get('/:id', (req, res)=>{
    res.status(200).send({ 
        status: 200, 
        message: 'Get a specific course' 
    })
})

router.post('/', async (req, res)=>{
    try{
        const course = await Course.create({
            ...req.body
        })
        res.status(200).json({ 
            status: 200, 
            course: course 
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            error: error.errors
        })
    }
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