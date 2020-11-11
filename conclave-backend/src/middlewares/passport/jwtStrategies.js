import { Strategy } from 'passport-jwt';

import User from '../../models/userModel';
import Token from '../../models/tokenModel';
import { secrets } from '../../config';

const cookieExtractor = (req, cookieToSelect) => {
  let token = null;
  if (!req) return token;
  if (req.signedCookies && req.signedCookies[cookieToSelect]) token = req.signedCookies[cookieToSelect];
  else if (req.cookies && req.cookies[cookieToSelect]) token = req.cookies[cookieToSelect];
  return token;
};

const authTokenExtractor = (req) => cookieExtractor(req, 'conclave-auth');

const refreshTokenExtractor = (req) => cookieExtractor(req, 'conclave-refresh');

export const jwtAuthStrategy = new Strategy({
  jwtFromRequest: authTokenExtractor,
  secretOrKey: secrets.accessTokenSecret,
}, (jwtPayload, done) => {
  User.findOne({ where: { username: jwtPayload.user.name } })
    .then((user) => {
      if (user) { return done(null, user); }
      return done(null, false);
    }).catch((err) => {
      console.error('JWT Auth Strategy Error: ', err);
      done(err);
    });
});

export const jwtRefreshStrategy = new Strategy({
  jwtFromRequest: refreshTokenExtractor,
  secretOrKey: secrets.refreshTokenSecret,
}, (jwtPayload, done) => {
  Token.findOne({ where: { userID: jwtPayload.user.sub } })
    .then((token) => {
      if (token) { return done(null, token.getUser()); }
      return done(null, false);
    }).catch((err) => {
      console.error('JWT Refresh Strategy Error: ', err);
      done(err);
    });
});
