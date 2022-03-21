import { orderBy } from 'firebase/firestore';
import { combineLatest, map, of, switchMap } from 'rxjs';
import { authService } from '../../auth/data/authService';
import userRepo from '../../user/data/userRepo';
import messagesRepo from './messagesRepo';
import { createMessage } from './teamUtils';

const createMessagesService = (teamId) => {
    const repo = messagesRepo(teamId);

    const getById$ = (msgId) => {
        return repo.getById$(msgId).pipe(
            switchMap((msg) => {
                return userRepo.getById$(msg.uid).pipe(
                    map((user) => {
                        return { ...msg, user };
                    })
                );
            })
        );
    };

    const getAll$ = () => {
        return repo.getWhere$(orderBy('createdAt', 'asc')).pipe(
            switchMap((msgs) => {
                if (msgs && msgs.length) {
                    return combineLatest(msgs.map((msg) => getById$(msg.id)));
                }
                return of([]);
            })
        );
    };

    const add = async (data) => {
        const { id: uid } = await authService.getLoggedUser();
        await repo.add(createMessage({ ...data, uid }));
    };

    return { ...repo, getAll$, add };
};

const messagesService = (teamId) => createMessagesService(teamId);
export default messagesService;
