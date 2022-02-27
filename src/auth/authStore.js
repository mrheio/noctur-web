import { writable } from 'svelte/store';
import authService from './data/authService';

export const authStore = writable({
    isLoading: false,
    success: null,
    error: null,
    loggedUser: null,
});
const { update } = authStore;

const setLoading = () =>
    update((state) => ({
        ...state,
        isLoading: true,
        success: null,
        error: null,
    }));

const setLoggedUser = (loggedUser) =>
    update((state) => ({
        ...state,
        isLoading: false,
        success: 'yes',
        error: null,
        loggedUser,
    }));

export const getLoggedUser$ = () => {
    setLoading();
    return authService.getLoggedUser$().subscribe((loggedUser) => {
        setLoggedUser(loggedUser);
    });
};

export const logOut = async () => {
    setLoading();

    await authService.logOut();
};
