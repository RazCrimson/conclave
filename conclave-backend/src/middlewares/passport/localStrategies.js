import LocalStrategy from 'passport-local';

import User from '../../models/userModel';

export const localSignInStrategy = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'unHashedPassword',
  session: false,
},
((username, unHashedPassword, done) => {
  User.findByUsernameAndPassword(username, unHashedPassword)
    .then((user) => {
      if (!user) return done(null, false, { message: 'Invalid Username & Password Combination.' });
      return done(null, user);
    }).catch((err) => done(err));
}));

export const localSignUpStrategy = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'unHashedPassword',
  session: false,
},
((username, unHashedPassword, done) => {
  User.findOne({ where: { username } }).then((user) => {
    if (!user) {
      const newUserInstance = User.build({ username, password: unHashedPassword });
      return done(null, newUserInstance);
    }
    return done(null, false, { message: 'Username already taken.' });
  }).catch((err) => done(err));
}));
