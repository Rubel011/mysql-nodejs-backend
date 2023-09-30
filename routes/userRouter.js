const express = require('express');
const userRouter = express.Router();
const authenticate = require('../middleware/authentication');
const { getUserByuser_id, updateUser, getUserImageByuser_id, insertNewUser, deleteUserByuser_id } = require('../controller/userController');


userRouter.get('/details/:user_id',getUserByuser_id);

userRouter.put('/update',updateUser);

userRouter.get('/image/:user_id',getUserImageByuser_id);

userRouter.post('/insert',insertNewUser);

userRouter.delete('/delete/:user_id',deleteUserByuser_id);

userRouter.post("/register",);

userRouter.post("/login",);

module.exports = userRouter;
