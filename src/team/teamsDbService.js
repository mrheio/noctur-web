import { where } from 'firebase/firestore';
import { firstValueFrom } from 'rxjs';
import { replaceSpacesWithUnderscores } from '../common/basicUtils';
import { Err } from '../common/err';
import FirestoreService from '../common/firebase/FirestoreService';
import gamesDbService from '../game/gamesDbService';
import { createTeam, validateTeamData } from './teamUtils';

const createTeamsDbService = (dbService) => ({
    getTeams$() {
        return dbService.getAll$();
    },

    getTeamById$(teamId) {
        return dbService.getById$(teamId);
    },

    async addTeam(teamData) {
        validateTeamData(teamData);
        const game = await firstValueFrom(
            gamesDbService.getGameById$(
                replaceSpacesWithUnderscores(teamData.gameName)
            )
        );
        if (teamData.neededPlayers > game.maxTeam) {
            throw Err.teamCapacityOverflow(game);
        }
        const team = createTeam(teamData);
        try {
            return await dbService.add(team);
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.teamAlreadyExists(team);
            }
            throw error;
        }
    },

    async deleteTeamById(teamId) {
        await dbService.deleteById(teamId);
    },

    async deleteTeamsByGameName(gameName) {
        await dbService.deleteWhere(where('gameName', '==', gameName));
    },

    updateTeam(teamId, newTeamData) {
        return dbService.update(teamId, newTeamData);
    },
});

const teamsDbService = createTeamsDbService(new FirestoreService('teams'));

export default teamsDbService;
