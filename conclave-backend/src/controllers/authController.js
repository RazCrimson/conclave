import User from '../models/userModel';

// eslint-disable-next-line no-unused-vars
export const signIn = async (req, res) => {
  const accessToken = await User.createAccessToken(req.user);
  const refreshToken = await User.createRefreshToken(req.user);
  console.log('Tokens : ', accessToken, refreshToken);

  res.cookie('conclave-auth', accessToken, { maxAge: 6000000, httpOnly: true });
  res.cookie('conclave-refresh', refreshToken, { maxAge: 604800000, httpOnly: true });

  return res.status(200).json({ data: { message: 'Logged In' } });
};

// eslint-disable-next-line no-unused-vars
export const signUp = async (req, res) => {
  const { username, password, email } = req.body;
  // TODO: Sanitize inputs find by regex.

  const usernameFound = await User.findOne({ where: { username } });
  if (usernameFound) return res.status(406).json({ data: { detail: 'Username already taken.', status: -11 } });

  const emailFound = await User.findOne({ where: { email } });
  if (emailFound) return res.status(406).json({ data: { detail: 'Email already in use.', status: -12 } });

  const user = await User.create({ username, password, email });
  console.debug('Created a new account: ', user.userID);

  const accessToken = await User.createAccessToken(user);
  const refreshToken = await User.createRefreshToken(user);

  res.cookie('conclave-auth', accessToken, { maxAge: 6000000, httpOnly: true });
  res.cookie('conclave-refresh', refreshToken, { maxAge: 604800000, httpOnly: true });

  return res.status(201).json({ data: { message: 'Account Created', accessToken, refreshToken } });
};

// eslint-disable-next-line no-unused-vars
export const signOut = async (req, res) => {};

// eslint-disable-next-line no-unused-vars
export const loginStatus = async (req, res) => {
  res.json({ username: req.user.username });
};

// eslint-disable-next-line no-unused-vars
export const generateAuthToken = async (req, res) => {};
