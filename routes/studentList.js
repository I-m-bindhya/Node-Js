const express = require('express');
const router = express.Router();
const StudentList = require("../models/studentListModel")

router.get('/', async(req, res) =>{

    try{
        const alien = await StudentList.find();
        res.json(alien)
    }catch(err){
        res.send(err)
    }

});

router.get('/:id', async(req, res) =>{

    try{
        const alien = await StudentList.findById(req.params.id);
        res.json(alien)
    }catch(err){
        res.send(err)
    }

})

router.patch('/:id', async(req, res) =>{

    try{
        const alien = await StudentList.findById(req.params.id);
        alien.status = req.body.status;
        const response = await alien.save();
        res.json(response)
    }catch(err){
        res.send(err)
    }

})

router.delete('/:id', async(req, res) =>{

    try{
        const alien = await StudentList.findByIdAndRemove(req.params.id);
        // alien.status = req.body.status;
        // const response = await alien.save();
        res.json(alien);
    }catch(err){
        res.send(err)
    }

})

router.post('/', async(req, res) =>{

    const student = new StudentList({
        name : req.body.name,
        rank : req.body.rank,
        status: req.body.status
    })

    try{
        const al = await student.save();
        res.json(al)
    }catch(err){
        res.send(err)
    }

})

module.exports = router