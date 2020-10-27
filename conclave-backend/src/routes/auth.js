import express from 'express';

import { signUp, signIn, signOut, loginStatus, refreshSession } from '../controllers/authController';

const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.get('/signOut', signOut);
authRouter.get('/status', loginStatus);
authRouter.post('/refreshSession', refreshSession);

export default authRouter;
