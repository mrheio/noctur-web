import { Err } from '../common/err';
import FirestoreService from '../common/firebase/FirestoreService';
import teamsDbService from '../team/teamsDbService';
import { createGame, validateGameData } from './gameUtils';

const createGamesDbService = (dbService) => ({
    getGames$() {
        return dbService.getAll$();
    },

    getGameById$(gameId) {
        return dbService.getById$(gameId);
    },

    async addGame(gameData) {
        validateGameData(gameData);
        const game = createGame(gameData);
        try {
            return await dbService.add(game);
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.gameAlreadyExists(game);
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

const gamesDbService = createGamesDbService(new FirestoreService('games'));

export default gamesDbService;
