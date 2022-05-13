'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const AddUser = mongoose.model('NewUsers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login_user = async (req, res) => {
    /*AddUser.find(user => user.name = req.body.useremail)
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }
        try {
           if (await bcrypt.compare(req.body.userpassword, user.userpassword)) {
               res.send('success')
           } else {
               res.send('this is not allowed')
           }
        } catch {
            res.status(500).send()
        }
        if (err)
        res.send(err);
        res.json(adduser);
    };*/
            const username = req.body.username;
            const email = req.body.useremail;
            const pass = req.body.userpassword

            const usera = await AddUser.findOne({ username }).lean()
            
            console.log(await usera);
            
            if ( await bcrypt.compare(pass, usera.userpassword)){
               let token = jwt.sign({userId: usera._id}, 'secretkey');
                return res.status(200).json({  
                    title: 'login success',
                    token: token  }); 
                //console.log('password matched')
            }else{
                console.log('user not found')
            }
};