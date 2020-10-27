import express from 'express';

import { createComment, editComment, deleteComment, commentDetails } from '../controllers/commentController';

const commentRouter = express.Router();

commentRouter.post('/create', createComment);
commentRouter.post('/edit', editComment);
commentRouter.get('/delete', deleteComment);
commentRouter.get('/details', commentDetails);
// commentRouter.get('/fetchComments', indexPage); TODO: implement with nested comments

export default commentRouter;
