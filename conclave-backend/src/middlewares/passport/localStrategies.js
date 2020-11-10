import LocalStrategy from 'passport-local';

import User from '../../models/userModel';

const localSignInStrategy = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
},
(username, password, done) => User.findByUsernameAndPassword(username, password)
  .then((user) => {
    if (!user) {
      done(null, false, { status: -1, message: 'Invalid Username & Password Combination.' });
    } else {
      user.update({ lastOnlineAt: Date.now() }).then(() => done(null, user));
    }
  }).catch((err) => {
    console.log('err ', err);
    done(err);
  }));

export default localSignInStrategy;
