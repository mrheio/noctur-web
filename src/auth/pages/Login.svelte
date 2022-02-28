<script>
    import { navigate } from 'svelte-routing';
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { authService } from '../data';

    let user = { email: '', password: '' };
    let status = {
        isLoading: false,
        error: null,
    };

    const handleLogIn = async () => {
        try {
            status = { ...status, isLoading: true, error: null };

            await authService.logInWithEmailAndPassword(
                user.email,
                user.password
            );

            status = { ...status, isLoading: false };
        } catch (error) {
            status = { ...status, isLoading: false, error };
        }
    };

    const handleNavigateToRegister = () => {
        navigate('register');
    };
</script>

<Loading condition={status.isLoading}>
    <div
        class="bg-secondary-800 bg-opacity-30 pt-8 pb-16 px-2 shadow-sm max-w-lg mx-auto"
    >
        <Form on:submit={handleLogIn}>
            <h2 class="font-bold">Autentificare</h2>
            <h6 class="mb-4">Pentru a intra in cont completeaza datele</h6>
            <InputField label="Email" name="email" bind:value={user.email} />
            <InputField
                label="Parola"
                name="password"
                type="password"
                bind:value={user.password}
            />
            <Btn>Intra in cont</Btn>
            <Btn type="button" on:click={handleNavigateToRegister}>
                Creeaza cont
            </Btn>
            <div class="h-6">
                {#if status.error}
                    {status.error.message}
                {/if}
            </div>
        </Form>
    </div>
</Loading>
