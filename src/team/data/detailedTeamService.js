import { combineLatest, of, switchMap } from 'rxjs';
import { userService } from '../../auth/data';
import { Err } from '../../common/utils';
import teamsDbService from './teamService';

const createDetailedTeamService = () => ({
    getDetailedTeamById$(teamId) {
        const team$ = teamsDbService.getTeamById$(teamId);
        const users$ = team$.pipe(
            switchMap((team) =>
                team ? userService.getUsersByIds$(team.usids) : of([])
            )
        );
        return combineLatest([team$, users$], (team, users) => {
            if (team) {
                return { ...team, users };
            }
            throw Err.notFound(`Echipa cu id ${teamId} nu exista`);
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
