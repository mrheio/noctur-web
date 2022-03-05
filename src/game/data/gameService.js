import { where } from 'firebase/firestore';
import { FirestoreService } from '../../common/firebase';
import { Err, replaceSpacesWithUnderscores } from '../../common/utils';
import { teamsDbService } from '../../team/data';
import { createGame } from './gameUtils';

const createGameService = (dbService) => ({
    getGames$() {
        return dbService.getAll$();
    },

    getGameById(gameId) {
        return dbService.getById(replaceSpacesWithUnderscores(gameId));
    },

    getGameById$(gameId) {
        return dbService.getById$(gameId);
    },

    getGameByName(gameName) {
        return dbService.getWhere(where('name', '==', gameName))[0];
    },

    async addGame(gameData) {
        const game = createGame(gameData);
        try {
            return await dbService.add(game);
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.alreadyExists(`Jocul ${game.name} exista deja`);
            }
            throw error;
        }
    },

    async deleteGameById(gameId) {
        await teamsDbService.deleteTeamsByGameName(gameId);
        await dbService.deleteById(gameId);
    },

    updateGame(gameId, newGameData) {
        return dbService.update(gameId, newGameData);
    },
});

const gameService = createGameService(new FirestoreService('games'));

export default gameService;
