import { type Response } from 'express';
import type { AuthenticatedRequest } from '../middlewares/session';

const getOrders = (req: AuthenticatedRequest, resp: Response) => {
  resp.send({
    message: "Congratulations, you can see this since you're authorized",
    user: req?.user,
  });
};
export { getOrders };
