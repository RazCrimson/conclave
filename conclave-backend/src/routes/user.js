import express from 'express';

import { getProfile, editProfile, deleteUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/profile', getProfile);
userRouter.post('/profile', editProfile);
userRouter.post('/delete', deleteUser);

export default userRouter;
