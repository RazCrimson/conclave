import LocalStrategy from 'passport-local';

import User from '../../models/userModel';

const localSignInStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
},
(email, password, done) => {
  User.findByEmailAndPassword(email, password)
    .then((user) => {
      if (!user) {
        done(null, false, { status: -1, detail: 'Invalid Username & Password Combination.' });
      } else {
        user.update({ lastOnlineAt: Date.now() }).then(() => done(null, user));
      }
    }).catch((err) => {
      console.log('err ', err);
      done(err, false, { status: -1, detail: err.message });
    });
});

export default localSignInStrategy;
