import { writable } from 'svelte/store';
import gameService from './data/gameService';

export const gamesStore = writable({
    isLoading: false,
    error: null,
    success: null,
    games: [],
});
const { update } = gamesStore;

const setLoading = () =>
    update((state) => ({
        ...state,
        isLoading: true,
        error: null,
        success: null,
    }));

const setGames = (games) =>
    update((state) => ({
        ...state,
        isLoading: false,
        error: null,
        success: 'yes',
        games,
    }));

const setError = (error) =>
    update((state) => ({ ...state, isLoading: false, error, success: null }));

export const getGames$ = () => {
    setLoading();
    return gameService.getAll$().subscribe((games) => {
        setGames(games);
    });
};

export const deleteGame = async (gameId) => {
    try {
        setLoading();
        await gameService.deleteById(gameId);
    } catch (error) {
        setError(error);
    }
};
