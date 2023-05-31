import * as models from '../../database/sequelize/models';
import { UserRepository } from './userRepository';

const userRepo = new UserRepository(models);

export { userRepo };
