import { orderBy } from 'firebase/firestore';
import authService from '../../auth/data/authService';
import messagesRepo from './messagesRepo';
import { createMessage } from './teamUtils';

const createMessagesService = (teamId) => {
    const repo = messagesRepo(teamId);

    const getAll$ = () => {
        return repo.getWhere$(orderBy('createdAt', 'asc'));
    };

    const add = async (data) => {
        const { id: uid, username } = await authService.getLoggedUser();
        await repo.add(createMessage({ ...data, uid, username }));
    };

    return { ...repo, getAll$, add };
};

const messagesService = (teamId) => createMessagesService(teamId);
export default messagesService;
