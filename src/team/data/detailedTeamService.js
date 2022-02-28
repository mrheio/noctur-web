import { combineLatest, of, switchMap } from 'rxjs';
import { usersDbService } from '../../auth/data';
import { Err } from '../../common/err';
import teamsDbService from './teamsDbService';

const createDetailedTeamService = () => ({
    getDetailedTeamById$(teamId) {
        const team$ = teamsDbService.getTeamById$(teamId);
        const users$ = team$.pipe(
            switchMap((team) =>
                team ? usersDbService.getUsersByIds$(team.usersIds) : of([])
            )
        );
        return combineLatest([team$, users$], (team, users) => {
            if (team) {
                return { ...team, users };
            }
            throw Err.teamNotFound(teamId);
        });
    },

    getDetailedTeams$() {
        return teamsDbService.getTeams$().pipe(
            switchMap((teams) => {
                if (teams && teams.length) {
                    return combineLatest(
                        teams.map((team) => this.getDetailedTeamById$(team.id))
                    );
                }
                return of([]);
            })
        );
    },
});

const detailedTeamService = createDetailedTeamService();

export default detailedTeamService;
