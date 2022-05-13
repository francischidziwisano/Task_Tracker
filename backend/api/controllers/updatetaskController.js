'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const AddUser = mongoose.model('AddLinks');

exports.update_task = async (req, res) => {
            const _id = req.params.id;
            const status = req.body.Status;

           console.log(status)

            const usera = await AddUser.updateOne({ _id }, { $set : { Status: status} })
            
            if (usera){
                console.log('Task Updated' + _id)
            }else{
                console.log('user not found')
            }
};