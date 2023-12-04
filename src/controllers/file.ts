import { type Response, type Request } from 'express';
import { handleRequest } from '../utils/error.handler';
import { User } from '../interfaces/user.interface';
import registerUpload from '../services/upload';
import { Storage } from '../interfaces/storage.interface';

interface FileMiddleware {
  fileName: string;
  location: string;
}
interface FileRequest extends Request {
  user?: User;
  fileMiddleware?: FileMiddleware;
}

const saveFile = async (req: FileRequest, resp: Response) => {
  try {
    const { user, file } = req;
    const dataToSave: Storage = {
      fileName: file?.filename,
      userId: user?.id,
      path: file?.path,
    };
    const response = await registerUpload(dataToSave);
    resp.send(response);
  } catch (error) {
    handleRequest(resp, 'ERROR_STORING_FILE', error);
  }
};
export { saveFile };
