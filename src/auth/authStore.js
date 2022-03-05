import { writable } from 'svelte/store';
import { authService } from './data';

export const authStore = writable({
    isLoading: false,
    success: null,
    error: null,
    user: null,
});
const { update } = authStore;

const setLoading = () =>
    update((state) => ({
        ...state,
        isLoading: true,
        success: null,
        error: null,
    }));

const setLoggedUser = (user) =>
    update((state) => ({
        ...state,
        isLoading: false,
        success: 'yes',
        error: null,
        user,
    }));

export const getLoggedUser$ = () => {
    setLoading();
    return authService.getLoggedUser$().subscribe((user) => {
        setLoggedUser(user);
    });
};

export const logOut = async () => {
    setLoading();
    await authService.logOut();
};
