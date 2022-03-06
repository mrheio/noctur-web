import { get, writable } from 'svelte/store';

export const createForm = (initData, onSubmit, preSubmit = null) => {
    const data = writable({ ...initData });
    const status = writable({ isLoading: false, error: null });

    const submit = async () => {
        try {
            const aux = get(data);
            if (preSubmit) {
                preSubmit(aux);
            }
            status.set({ isLoading: true, error: null });
            await onSubmit(aux);
            data.set({ ...initData });
            status.set({ isLoading: false, error: null });
        } catch (error) {
            status.set({ isLoading: false, error });
        }
    };

    return { data, status, submit };
};
