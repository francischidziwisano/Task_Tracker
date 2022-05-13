'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const AddUser = mongoose.model('NewUsers');
const bcrypt = require('bcrypt');
const { use } = require('passport');

exports.login_user = async (req, res) => {
            const username = req.body.username;
            const email = req.body.useremail;
            const pass = req.body.userpassword

            const usera = await AddUser.findOne({ username }).lean()

            if ( await bcrypt.compare(pass, usera.userpassword)){               
                console.log('password matched')
            }else{
                console.log('user not found')
            }
};

exports.list_all_users = function (req, res) {
    AddUser.find({}, function(err, adduser) {
        if (err)
        res.send(err);
        res.json(adduser);
    });
};

exports.create_a_adduser = async (req, res) => {
    try {
        const newuser = new AddUser(
            req.body
        );
        newuser.userpassword = await bcrypt.hash(newuser.userpassword,10);
        console.log(newuser.userpassword);
        console.log(newuser);
        newuser.save(function(err, newuser){
            if (err)
            res.send(err);
            res.json(newuser)
        }); 
    }catch (error) {
    }
};

exports.read_a_user = function (req, res) {
    NewUser.findById(req.params.userId, function(err, user){
        if (err)
        res.send(err);
        res.json(user);
    });
};