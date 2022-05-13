'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const DeleteTask = mongoose.model('AddTasks');

exports.delete_user = async (req, res) => {
            const _id = req.body._id;

            const usera = await DeleteTask.deleteOne({ _id })
            
            if (usera){
                console.log('Task Deleted')
            }else{
                console.log('user not found')
            }
};