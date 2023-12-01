import { sign, verify } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const { JWT_SECRET = '' } = process.env;

const generateToken = (user: User) => {
  const jwt = sign({ id: user.email }, JWT_SECRET, { expiresIn: '2h' });
  return jwt;
};

const verifyToken = async () => {};

export { verifyToken, generateToken };
