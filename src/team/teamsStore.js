import { writable } from 'svelte/store';
import teamService from './data/teamService';

export const teamsStore = writable({
    isLoading: false,
    error: null,
    success: null,
    teams: [],
});
const { update } = teamsStore;

export const getTeams$ = () => {
    update((state) => ({
        ...state,
        isLoading: true,
        error: null,
        success: null,
    }));
    const sub = teamService.getAll$().subscribe((teams) => {
        update((state) => ({
            ...state,
            isLoading: false,
            error: null,
            success: 'yes',
            teams,
        }));
    });
    return sub;
};

export const deleteTeam = async (team) => {
    try {
        update((state) => ({
            ...state,
            isLoading: true,
            error: null,
            success: null,
        }));
        await teamService.deleteById(team.id);
        update((state) => ({
            ...state,
            isLoading: false,
            error: null,
            success: 'yes',
        }));
    } catch (error) {
        update((state) => ({
            ...state,
            isLoading: false,
            error,
            success: null,
        }));
    }
};
