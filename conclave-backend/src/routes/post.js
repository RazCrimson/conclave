import express from 'express';

import { createPost, editPost, deletePost, postDetails, fetchComments } from '../controllers/postController';

const postRouter = express.Router();

postRouter.post('/create', createPost);
postRouter.post('/edit', editPost);
postRouter.get('/delete', deletePost);
postRouter.get('/details', postDetails);
postRouter.get('/fetchComments', fetchComments);

export default postRouter;
