import { get, writable } from 'svelte/store';
import { authStore } from '../auth/authStore';
import { detailedTeamService, teamsDbService } from './data';

export const teamsStore = writable({
    isLoading: false,
    error: null,
    success: null,
    teams: [],
});
const { update } = teamsStore;

const setLoading = () => {
    update((state) => ({
        ...state,
        isLoading: true,
        error: null,
        success: null,
    }));
};

const setError = (error) => {
    update((state) => ({ ...state, isLoading: false, error, success: null }));
};

export const setSuccess = () => {
    update((state) => ({
        ...state,
        isLoading: false,
        error: null,
        success: 'yes',
    }));
};

const setTeams = (teams) => {
    update((state) => ({
        ...state,
        isLoading: false,
        error: null,
        success: 'yes',
        teams,
    }));
};

export const getDetailedTeams$ = () => {
    setLoading();
    return detailedTeamService.getDetailedTeams$().subscribe((teams) => {
        setTeams(teams);
    });
};

export const deleteTeam = async (team) => {
    try {
        setLoading();

        await teamsDbService.deleteTeamById(team.id);

        setSuccess();
    } catch (error) {
        setError(error);
    }
};

export const joinTeam = async (team) => {
    try {
        setLoading();

        const { loggedUser } = get(authStore);
        await teamsDbService.updateTeam(team.id, {
            usersIds: [...team.usersIds, loggedUser.id],
        });

        setSuccess();
    } catch (error) {
        setError(error);
    }
};

export const quitTeam = async (team) => {
    try {
        setLoading();

        const { loggedUser } = get(authStore);
        await teamsDbService.updateTeam(team.id, {
            usersIds: team.usersIds.filter((id) => id !== loggedUser.id),
        });

        setSuccess();
    } catch (error) {
        setError(error);
    }
};
