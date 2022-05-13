'use strict'

const mongoose = require('mongoose');
const AddTask = mongoose.model('AddTasks');

exports.list_all_addtasks = function (req, res) {
    AddTask.find({}, function(err, addtask) {
        //console.log(addtask)
        if (err)
        res.send(err);
        res.json(addtask);
    });
};

exports.create_a_addtask = function (req, res) {
    try {
        const addtask = new AddTask(
            req.body
        );
        addtask.save(function(err, addtask){
            if (err)
            res.send(err);
            res.json(addtask)
        }); 
    }catch (error) {

    }
};

exports.read_a_addtask = function (req, res) {
    AddTask.findById(req.params.addTaskId, function(err, addtask){
        if (err)
        res.send(err);
        res.json(addtask);
    });
};