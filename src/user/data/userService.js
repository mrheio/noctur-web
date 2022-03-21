import { authService } from '../../auth/data/authService';
import { Err } from '../../common/utils';
import userRepo from './userRepo';
import { createUser, validateUserData } from './userUtils';

const createUserService = () => {
    const add = async (user) => {
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

    const updateLoggedUser = async (data) => {
        const user = await authService.getLoggedUser();
        await userRepo.update(user.id, data);
    };

    return { ...userRepo, add, updateLoggedUser };
};

export default createUserService();
