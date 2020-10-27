import LocalStrategy from 'passport-local';

import {User} from '../../models/userModel';

export const localSignInStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'unHashedPassword',
    session: false
  },
  function (username, unHashedPassword, done) {
    User.findByUsernameAndPassword(username, unHashedPassword)
      .then((user) => {
        if (!user)
          return done(null, false, {message: 'Invalid Username & Password Combination.'});
        else
          return done(null, user);
      }).catch((err) => {
      return done(err)
    })
  });


export const localSignUpStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'unHashedPassword',
    session: false
  },
  function (username, unHashedPassword, done) {
    User.findOne({where: {username: username}}).then((user) => {
      if (!user){
        user = User.build({username:username, password:unHashedPassword})
        return done(null, user);
      }
      return done(null, false, {message: 'Username already taken.'});
    }).catch((err) => {
      return done(err)
    })
  });
