import { map, switchMap } from 'rxjs';
import authService from '../../auth/data/authService';
import userRepo from '../../auth/data/userRepo';
import { Err } from '../../common/utils';
import gameRepo from '../../game/data/gameRepo';
import teamRepo from './teamRepo';
import { createTeam, validateTeamData } from './teamUtils';

const createTeamService = () => {
    const add = async (team) => {
        try {
            validateTeamData(team);
            const game = await gameRepo.getByName(team.game);
            if (team.capacity > game.capacity) {
                throw Err.capacityOverflow(
                    `Jocul ${game.name} poate avea maxim ${game.capacity} jucatori in echipa`
                );
            }
            const user = await authService.getLoggedUser();
            await teamRepo.add(createTeam({ ...team, uid: user.id }));
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.alreadyExists(
                    `Ai deja o echipa pentru jocul ${team.game}`
                );
            }
            throw error;
        }
    };

    const addUserToTeam = async (user, team) => {
        await teamRepo.update(team.id, { usids: [...team.usids, user.id] });
    };

    const addLoggedUserToTeam = async (team) => {
        const user = await authService.getLoggedUser();
        await addUserToTeam(user, team);
    };

    const removeUserFromTeam = async (user, team) => {
        await teamRepo.update(team.id, {
            usids: team.usids.filter((uid) => uid !== user.id),
        });
    };

    const removeLoggedUserFromTeam = async (team) => {
        const user = await authService.getLoggedUser();
        await removeUserFromTeam(user, team);
    };

    const getDetailedTeamById$ = (teamId) => {
        return teamRepo.getById$(teamId).pipe(
            switchMap((team) => {
                if (team) {
                    const stream = userRepo.getByIds$(team.usids);
                    return stream.pipe(
                        map((users) => {
                            return { ...team, users };
                        })
                    );
                }
                throw Err.notFound(`Nu exista echipa cu id ${teamId}`);
            })
        );
    };

    return {
        ...teamRepo,
        add,
        addUserToTeam,
        addLoggedUserToTeam,
        removeUserFromTeam,
        removeLoggedUserFromTeam,
        getDetailedTeamById$,
    };
};

export default createTeamService();
