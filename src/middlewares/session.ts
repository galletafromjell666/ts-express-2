import type { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.handler';

const checkJwt = (req: Request, resp: Response, next: NextFunction) => {
  try {
    const jwtHeader = req.headers?.authorization ?? '';
    const cleanJwt = jwtHeader.split(' ').pop() ?? '';
    const verifiedUser = verifyToken(cleanJwt);
    if (!verifiedUser) {
      resp.status(401).send('INVALID_SESSION');
    } else {
      req.user = verifiedUser;
      next();
    }
  } catch (e) {
    resp.status(400).send('INVALID_SESSION');
  }
};

export default checkJwt;
