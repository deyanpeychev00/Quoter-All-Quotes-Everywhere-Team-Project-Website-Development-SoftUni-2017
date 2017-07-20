const mongoose = require('mongoose');
const User = mongoose.model('User');
const Role = mongoose.model('Role');
const encryption = require('./../../utilities/encryption');

function validateUser(userArgs, req) {
    let errorMsg = '';
    if (!req.isAuthenticated()) {
        errorMsg = 'You should be logged in to edit users!';
    } else if (!userArgs.email) {
        errorMsg = 'Invalid email!';
    } else if (!userArgs.fullName) {
        errorMsg = 'Invalid username!';
    } else if(userArgs.roleName !== 'User' && userArgs.roleName!=='Admin'){
        errorMsg = `Invalid role name. Valid roles: <b> Admin/User</b>!`;
    }

    return errorMsg;
}

module.exports = {
    all: (req,res) => {
        User.find({}).then(users => {

            for(let user of users) {
                user.isInRole('Admin').then(isAdmin => {
                    user.isAdmin = isAdmin;
                });
            }

            res.render('admin/user/all', {users: users})
        });
    },

    deleteGet: (req,res) => {
        let id = req.params.id;
        User.findById(id).then(user => {
            res.render('admin/user/delete', {userToDelete: user})
        });
    },

    deletePost: (req,res) => {
        let id = req.params.id;

        User.findById(id).then(user => {

            if(user.isAdmin.length !== 1){
                User.findOneAndRemove({_id: id}).then(user => {
                    user.prepareDelete();
                    User.find({}).then(users => {

                        for(let user of users) {
                            user.isInRole('Admin').then(isAdmin => {
                                user.isAdmin = isAdmin;
                            });
                        }

                        res.render('admin/user/all', {users: users})
                    });
                });
            }
            else {
                User.find({}).then(users => {

                    for(let user of users) {
                        user.isInRole('Admin').then(isAdmin => {
                            user.isAdmin = isAdmin;
                        });
                    }

                    res.render('admin/user/all', {error: "Admin user cannot be deleted!", users: users});
                });
            }
        });
    },

    editUserGet: (req,res) => {
        let id = req.params.id;
        User.findById(id).then(user => {
            res.render('admin/user/edit', {userToEdit: user})
        });
    },

    editUserPost: (req, res) =>{
        let id = req.params.id;

        let userArgs = req.body;

        let errorMsg = validateUser(userArgs, req);

        if (errorMsg) {
            User.findById(id).then(user => {
                res.render('admin/user/edit', {error: errorMsg, userToEdit: user})
            });
        }
        else {
            Role.findOne({name: userArgs.roleName}).then(role => {
                if(userArgs.roleName.toString() === 'Admin'){

                    // finding user by id to use it in roles users array operations
                    User.findById(id).then(user => {

                        // switching user role in roles users array
                        Role.findOne({name: 'Admin'}).then(role => {
                            if(role.users.indexOf(user.id.toString()) === -1){
                                role.users.push(user.id);
                                role.save(err => {
                                    if(err){
                                        console.log(err);
                                    }
                                })
                            }
                            Role.findOne({name: 'User'}).then(role => {
                                if(role.users.indexOf(user.id.toString()) !== -1){
                                    role.users.splice(role.users.indexOf(user.id.toString()), 1);
                                    role.save(err => {
                                        if(err){
                                            console.log(err);
                                        }
                                    })
                                }
                            });
                        });
                    });


                    // updating user in database
                    User.update({_id: id}, {$set: {email: userArgs.email, fullName: userArgs.fullName, roleName: userArgs.roleName, roles: [role], isAdmin: [1]}})
                        .then(updateStatus => {
                            User.find({}).then(users => {

                                // loading all users and rendering to admin/user/all
                                for(let user of users) {
                                    user.isInRole('Admin').then(isAdmin => {
                                        user.isAdmin = isAdmin;
                                    });
                                }

                                res.render('admin/user/all', {users: users})
                            });
                        });
                }else{
                    // finding user by id to use it in roles users array operations
                    User.findById(id).then(user => {

                        // switching user role in roles users array
                        Role.findOne({name: 'User'}).then(role => {
                            if (role.users.indexOf(user.id.toString()) === -1) {
                                role.users.push(user.id.toString());
                                role.save(err => {
                                    if(err){
                                        console.log(err);
                                    }
                                })
                            }
                            Role.findOne({name: 'Admin'}).then(role => {
                                if (role.users.indexOf(user.id.toString()) !== -1) {
                                    role.users.splice(role.users.indexOf(user.id.toString()), 1);
                                    role.save(err => {
                                        if(err){
                                            console.log(err);
                                        }
                                    })
                                }
                            });
                        });
                    });
                    // updating user in database
                    User.update({_id: id}, {$set: {email: userArgs.email, fullName: userArgs.fullName, roleName: userArgs.roleName, roles: [role], isAdmin: []}})
                        .then(updateStatus => {
                            User.find({}).then(users => {

                                // loading all users and rendering to admin/user/all
                                for(let user of users) {
                                    user.isInRole('Admin').then(isAdmin => {
                                        user.isAdmin = isAdmin;
                                    });
                                }

                                res.render('admin/user/all', {users: users})
                            });
                        });
                }
            });
        }
    }
};