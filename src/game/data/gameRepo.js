import { where } from 'firebase/firestore';
import createBaseRepo from '../../common/BaseRepo';
import { FirestoreService } from '../../common/firebase';

const createGameRepo = (db) => {
    const baseRepo = createBaseRepo(db);

    const getByName = async (name) => {
        const res = await db.getWhere(where('name', '==', name));
        console.log(res);
        return res[0];
    };

    return {
        ...baseRepo,
        getByName,
    };
};

export default createGameRepo(new FirestoreService('games'));
