const express = require('express');
const userRouter = express.Router();
const authenticate = require('../middleware/authentication');

// Import controller functions for user-related operations
const {
    getUserByuser_id,
    updateUser,
    getUserImageByuser_id,
    insertNewUser,
    deleteUserByuser_id,
    userLogin,
} = require('../controller/userController');

// Define routes and associate them with controller functions

// Route to fetch user details by user_id
userRouter.get('/details/:user_id', getUserByuser_id);

// Route to update user details
userRouter.put('/update', authenticate, updateUser);

// Route to fetch user image by user_id
userRouter.get('/image/:user_id', getUserImageByuser_id);

// Route to insert a new user
userRouter.post('/insert', authenticate, insertNewUser);

// Route to delete a user by user_id
userRouter.delete('/delete/:user_id', deleteUserByuser_id);

// Route to register a new user
userRouter.post('/register', insertNewUser);

// Route to handle user login
userRouter.post('/login', userLogin);

module.exports = userRouter;
