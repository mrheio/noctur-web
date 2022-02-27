import { where } from 'firebase/firestore';
import FirestoreService from '../../common/firebase/FirestoreService';

const createUserDbService = (dbService) => ({
    getUsers$() {
        return dbService.getAll$();
    },

    getUserById$(userId) {
        return dbService.getById$(userId);
    },

    getUsersByIds$(usersIds) {
        return dbService.getWhere$(where('id', 'in', usersIds));
    },

    addUser(userData) {
        return dbService.add(userData);
    },

    async deleteUserById(userId) {
        await dbService.deleteById(userId);
    },

    async updateUser(userId, newUserData) {
        return dbService.update(userId, newUserData);
    },
});

const usersDbService = createUserDbService(new FirestoreService('users'));

export default usersDbService;
