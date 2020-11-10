import passport from 'passport';

import localSignInStrategy from './localStrategies';
import { jwtStrategy, jwtRefreshStrategy } from './jwtStrategy';

passport.use('localSignIn', localSignInStrategy);

passport.use('jwtRefresh', jwtRefreshStrategy);

passport.use('jwt', jwtStrategy);

const passportAuth = (req, res, next, name) => {
  passport.authenticate(name, {}, (err, user, info) => {
    if (err) res.status(500).json({ data: { detail: err.message, status: -1 } });
    else if (!user) res.status(404).json({ data: { detail: info, status: -2 } });
    else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

export const localSignInAuth = (res, req, next) => passportAuth(res, req, next, 'localSignIn');

export const jwtAuth = (res, req, next) => passportAuth(res, req, next, 'jwt');

export const jwtRefresh = (res, req, next) => passportAuth(res, req, next, 'jwt');

passport.serializeUser((user, done) => {
  done(null, user.userID);
});
