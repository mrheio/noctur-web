import { writable } from 'svelte/store';
import gamesDbService from './gamesDbService';

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
    return gamesDbService.getGames$().subscribe((games) => {
        setGames(games);
    });
};

export const addGame = async (gameData) => {
    try {
        setLoading();

        await gamesDbService.addGame(gameData);
    } catch (error) {
        setError(error);
    }
};

export const deleteGame = async (gameId) => {
    try {
        setLoading();

        await gamesDbService.deleteGameById(gameId);
    } catch (error) {
        setError(error);
    }
};
