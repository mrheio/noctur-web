import { where } from 'firebase/firestore';
import { FirestoreService } from '../../common/firebase';
import { Err } from '../../common/utils';
import {} from '../../common/utils/basicUtils';
import { gameService } from '../../game/data';
import { createTeam } from './teamUtils';

const createTeamService = (dbService) => ({
    getTeams$() {
        return dbService.getAll$();
    },

    getTeamById$(teamId) {
        return dbService.getById$(teamId);
    },

    async addTeam(teamData) {
        const game = await gameService.getGameById(teamData.game);
        if (teamData.capacity > game.capacity) {
            throw Err.capacityOverflow(
                `Jocul ${game.name} are echipa de maxim ${game.capacity} jucatori`
            );
        }

        const team = createTeam(teamData);
        try {
            return await dbService.add(team);
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.alreadyExists(
                    `Ai deja o echipa pentru jocul ${teamData.game}`
                );
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

const teamService = createTeamService(new FirestoreService('teams'));

export default teamService;
