'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddLinkSchema = new Schema({
    Title: {
        type: String,
        required: 'Title'
    },
    Due_Date: {
        type: String,
        required: 'Due_Date'
    },
    Description: {
        type: String,
        required: 'Description'
    },        
    Status: {
        type: String 
    },  
    Date_Added: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AddLinks', AddLinkSchema);