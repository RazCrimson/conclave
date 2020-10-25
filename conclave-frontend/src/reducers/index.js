import {combineReducers} from 'redux';
import auth from './auth';
import register from './register';
import userProfile from './userprofile';
import home from './home';
import users from './users';
import forum from './forum';
import thread from './thread';

const rootReducer = combineReducers({
  auth,
  register,
  userProfile,
  home,
  users,
  forum,
  thread,
});

export default rootReducer;
