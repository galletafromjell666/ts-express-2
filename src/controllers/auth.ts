import { type Request, type Response } from 'express';
import { registerUser, loginUser } from '../services/auth';
import type { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';

const register = async ({ body }: Request, resp: Response) => {
  const response = await registerUser(body as User);
  if (response === 'ALREADY_REGISTERED') {
    resp.status(409).send(response);
    return;
  }
  const { password: _password, ...userWithoutPassword } = response;
  resp.send(userWithoutPassword);
};

const authenticate = async ({ body }: Request, resp: Response) => {
  const response = await loginUser(body as Auth);
  if (response === 'EMAIL_NOT_FOUND' || response === 'INCORRECT_PASSWORD') {
    resp.status(401).send(response);
    return;
  }
  resp.send(response);
};

export { register, authenticate };
