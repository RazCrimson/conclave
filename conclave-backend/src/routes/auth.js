import express from 'express';

import { jwtAuth, localSignInAuth } from '../middlewares/passport/passportConfig';
import { signUp, signIn, signOut, loginStatus, generateAuthToken } from '../controllers/authController';

const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', localSignInAuth, signIn);
authRouter.get('/signOut', signOut);
authRouter.get('/status', jwtAuth, loginStatus);
authRouter.post('/refreshSession', generateAuthToken);

export default authRouter;
