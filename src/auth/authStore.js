import { get, writable } from 'svelte/store';
import authService from './data/authService';

export const authStore = writable({
    isLoading: false,
    error: null,
    success: null,
    user: null,
});
const { update } = authStore;

export const isAdmin = () => {
    return get(authStore).user?.roles.admin;
};

export const getLoggedUser$ = () => {
    update((state) => ({
        ...state,
        isLoading: true,
        error: null,
        success: null,
    }));
    return authService.getLoggedUser$().subscribe((user) => {
        update((state) => ({
            ...state,
            isLoading: false,
            error: null,
            success: true,
            user,
        }));
    });
};

export const logOut = async () => {
    update((state) => ({
        ...state,
        isLoading: true,
        error: null,
        success: null,
    }));
    await authService.logOut();
};
