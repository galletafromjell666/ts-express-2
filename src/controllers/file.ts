import { type Response, type Request } from 'express';

const saveFile = (_req: Request, resp: Response) => {
  resp.send({});
};
export { saveFile };
