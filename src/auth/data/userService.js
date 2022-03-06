import { Err } from '../../common/utils';
import userRepo from './userRepo';
import { createUser, validateUserData } from './userUtils';

const createUserService = () => {
    const add = async (user) => {
        console.log(user);
        try {
            validateUserData(user);
            await userRepo.add(createUser(user));
        } catch (error) {
            if (error?.code === 'already-exists') {
                throw Err.alreadyExists(`Un user cu aceste date exista deja`);
            }
            throw error;
        }
    };

    return { ...userRepo, add };
};

export default createUserService();
