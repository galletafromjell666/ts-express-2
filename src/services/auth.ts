import UserModel from '../models/user';
import { User } from '../interfaces/user.interface';
import { encrypt, verify } from '../utils/bcrypt.handler';
import { Auth } from '../interfaces/auth.interface';
import { generateToken } from '../utils/jwt.handler';

const registerUser = async ({ email, password, description, name }: User) => {
  const isRegistered = await UserModel.findOne({ email });
  if (isRegistered) return 'ALREADY_REGISTERED';
  const hashedPassword = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: hashedPassword,
    description,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const registeredUser = await UserModel.findOne({ email });
  if (!registeredUser) return 'EMAIL_NOT_FOUND';

  const storedPassword = registeredUser.password;
  const isCorrect = await verify(password, storedPassword);
  if (!isCorrect) return 'INCORRECT_PASSWORD';

  const jwt = generateToken(registeredUser);
  return jwt;
};

export { loginUser, registerUser };
