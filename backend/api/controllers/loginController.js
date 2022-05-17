'use strict'

const { application } = require('express');
const mongoose = require('mongoose');
const AddUser = mongoose.model('NewUsers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login_user = async (req, res) => {
            const email = req.body.email;
            const pass = req.body.userpassword

            const usera = await AddUser.findOne({ email }).lean()
            
            console.log(await usera);
            console.log(email)
            
            if ( await bcrypt.compare(pass, usera.userpassword)){
               let token = jwt.sign({userId: usera._id}, 'secretkey');
                return res.status(200).json({  
                    title: 'login success',
                    token: token  }); 
            }else{
                console.log('user not found')
            }
};