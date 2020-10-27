import Admin from '../models/adminModel';
import User from '../models/userModel';
import Moderator from '../models/moderatorModel';
import Friends from '../models/friendsModel';
import Channel from '../models/channelModel';
import Post from '../models/postModel';
import PostVote from '../models/postVoteModel';
import Comment from '../models/commentModel';
import CommentVote from '../models/commentVoteModel';

(async () => {
  try {
    await Admin.sync({ alter: true });
    await User.sync({ alter: true });
    await Moderator.sync({ alter: true });
    await Friends.sync({ alter: true });
    await Channel.sync({ alter: true });
    await Post.sync({ alter: true });
    await PostVote.sync({ alter: true });
    await Comment.sync({ alter: true });
    await CommentVote.sync({ alter: true });
  } catch (e) {
    console.error('databaseModel : ', e);
  }
})();
