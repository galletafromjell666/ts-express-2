import { type Request, type Response } from 'express';

const getOrders = (_req: Request, resp: Response) => {
  resp.send("Congratulations, you can see this since you're authorized");
};
export { getOrders };
