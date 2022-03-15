import createBaseRepo from '../../common/BaseRepo';
import { FirestoreService } from '../../common/firebase';

const createMessagesRepo = (db) => {
    const baseRepo = createBaseRepo(db);

    return { ...baseRepo };
};

const messagesRepo = (teamId) =>
    createMessagesRepo(new FirestoreService(`teams/${teamId}/messages`));
export default messagesRepo;
