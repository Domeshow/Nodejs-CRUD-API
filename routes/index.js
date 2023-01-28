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

router.get('/:id', async (req, res)=>{
    try{
        const course = await Course.findOne({_id: req.params.id});
        if(course)
        {
            return res.status(200).send({ 
                status: 200, 
                courses: course 
            })
        }else{
            res.status(400).send({ 
                status: 400, 
                message: `Course "${req.params.id}" not found` 
            })
        }
        
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            error: err.errors
        })
    }
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

router.put('/:id', async (req, res)=>{
    try{
        const course = await Course.findOne({_id: req.params.id});
        if(course)
        {
            await course.updateOne({
                name: req.body.name,
                description: req.body.description,
                available: req.body.available
            },{_id: req.params.id});

            return res.status(200).send({ 
                status: 200, 
                message: "Course updated successfully!" 
            })
        }else{
            res.status(400).send({ 
                status: 400, 
                message: `Course "${req.params.id}" not found` 
            })
        }
        
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const course = await Course.findOne({_id: req.params.id});
        if(course)
        {
            await course.remove();

            return res.status(200).send({ 
                status: 200, 
                message: "Course successfully removed!" 
            })
        }else{
            res.status(400).send({ 
                status: 400, 
                message: `Course "${req.params.id}" not found` 
            })
        }
        
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            error: err.message
        })
    }
})

module.exports = router;