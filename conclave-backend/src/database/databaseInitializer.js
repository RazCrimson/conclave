import {admin} from "../models/adminModel";
import {user} from "../models/userModel";
import {moderator} from "../models/moderatorModel";
import {friends} from "../models/friendsModel";
import {channel} from "../models/channelModel";
import {post} from "../models/postModel";
import {postVote} from "../models/postVoteModel";
import {comment} from "../models/commentModel";
import {commentVote} from "../models/commentVoteModel";

(async () => {
  try {
    await admin.sync({alter: true})
    await user.sync({alter: true})
    await moderator.sync({alter: true})
    await friends.sync({alter: true})
    await channel.sync({alter: true})
    await post.sync({alter: true})
    await postVote.sync({alter: true})
    await comment.sync({alter: true})
    await commentVote.sync({alter: true})
  } catch (e) {
    console.error("databaseModel : ", e)
  }
})();

