import { where } from 'firebase/firestore';
import createBaseRepo from '../../common/BaseRepo';
import { FirestoreService } from '../../common/firebase';

const createUserRepo = (db) => {
    const baseRepo = createBaseRepo(db);

    const getByIds$ = (ids) => {
        return db.getWhere$(where('id', 'in', ids));
    };

    return { ...baseRepo, getByIds$ };
};

export default createUserRepo(new FirestoreService('users'));
