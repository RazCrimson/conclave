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

const jwtCookieExtractor = (req) => cookieExtractor(req, 'jwt');

const refreshCookieExtractor = (req) => cookieExtractor(req, 'ref');

export const jwtStrategy = new Strategy({
  jwtFromRequest: jwtCookieExtractor,
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
  jwtFromRequest: refreshCookieExtractor,
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
