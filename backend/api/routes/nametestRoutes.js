'use strict'

module.exports = function(app){
    const addtask = require('../controllers/addtaskController')
    const adduser = require('../controllers/adduserController')
    const login = require('../controllers/loginController')
    const deleteuser = require('../controllers/deleteController')
    const updatetask = require('../controllers/updatetaskController')

    //Adding group links
    app.route('/addtask')
    .get(addtask.list_all_addtasks)
    .post(addtask.create_a_addtask);

    app.route('addtasks/:addtaskId')
    .get(addtask.read_a_addtask);

    //Adding users
    app.route('/adduser')
    .get(adduser.list_all_users)
    .post(adduser.create_a_adduser);

    app.route('adduser/:adduserId')
    .get(adduser.read_a_user);

    app.route('/login')
    .post(login.login_user)
    .get(login.login_user)

    app.route('/deleteuser')
    .delete(deleteuser.delete_user)
    .get(deleteuser.delete_user)

    app.route('/updatetask/:id')
    .post(updatetask.update_task)
    .get(updatetask.update_task)
};