import { welcomeText } from '../config';

// eslint-disable-next-line import/prefer-default-export
export const indexPage = (req, res) => res.status(200).json({ message: welcomeText });
