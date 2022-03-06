import { writable } from 'svelte/store';
import teamService from './data/teamService';

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
    return teamService.getDetailedTeams$().subscribe((teams) => {
        setTeams(teams);
    });
};

export const deleteTeam = async (team) => {
    try {
        setLoading();

        await teamService.deleteById(team.id);

        setSuccess();
    } catch (error) {
        setError(error);
    }
};
