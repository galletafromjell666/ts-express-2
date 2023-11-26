import { Router, type Request, type Response } from 'express';

const router = Router();
router.get('/', (_req: Request, resp: Response) => {
  resp.send({ type: 'uwu' });
});

export default router;
