import { where } from 'firebase/firestore';
import createBaseRepo from '../../common/BaseRepo';
import { FirestoreService } from '../../common/firebase';
import { replaceUnderscoresWithSpaces } from '../../common/utils';

const createTeamRepo = (db) => {
    const baseRepo = createBaseRepo(db);

    const deleteByGame = async (gameName) => {
        await db.deleteWhere(where('game', '==', gameName));
    };

    const deleteByGameId = async (gameId) => {
        await db.deleteWhere(
            where('game', '==', replaceUnderscoresWithSpaces(gameId))
        );
    };

    return {
        ...baseRepo,
        deleteByGame,
        deleteByGameId,
    };
};

const teamRepo = createTeamRepo(new FirestoreService('teams'));
export default teamRepo;
