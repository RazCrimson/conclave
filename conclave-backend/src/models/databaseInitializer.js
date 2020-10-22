import {admin} from "./adminModel";
import {user} from "./userModel";
import {moderator} from "./moderatorModel";
import {friends} from "./friendsModel";
import {channel} from "./channelModel";
import {post} from "./postModel";
import {postVote} from "./postVoteModel";
import {comment} from "./commentModel";
import {commentVote} from "./commentVoteModel";

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

