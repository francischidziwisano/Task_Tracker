'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const AddUser = mongoose.model('AddLinks');

exports.delete_user = async (req, res) => {
            const _id = req.body._id;

            const usera = await AddUser.deleteOne({ _id })
            
            if (usera){
                console.log('Task Deleted')
            }else{
                console.log('user not found')
            }
};