import express from 'express';

import { createChannel, editChannel, deleteChannel, channelDetails, fetchPosts } from '../controllers/channelController';

const channelRouter = express.Router();

channelRouter.post('/create', createChannel);
channelRouter.post('/edit', editChannel);
channelRouter.get('/delete', deleteChannel);
channelRouter.get('/details', channelDetails);
channelRouter.get('/fetchPosts', fetchPosts);

export default channelRouter;
