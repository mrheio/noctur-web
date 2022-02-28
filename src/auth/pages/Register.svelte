<script>
    import { navigate } from 'svelte-routing';
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { authService } from '../data';

    let user = {
        email: '',
        username: '',
        password: '',
    };
    let status = {
        isloading: false,
        error: null,
    };

    const handleRegister = async () => {
        try {
            status = { ...status, isloading: true, error: null };

            await authService.register(
                user.email,
                user.username,
                user.password
            );

            status = { ...status, isloading: false };
        } catch (error) {
            status = { ...status, isloading: false, error };
        }
    };

    const handleNavigateToLogin = () => {
        navigate('login');
    };
</script>

<Loading condition={status.isloading}>
    <div
        class="bg-secondary-800 bg-opacity-30 pt-8 pb-16 px-2 shadow-sm max-w-lg mx-auto"
    >
        <Form on:submit={handleRegister}>
            <h2 class="font-bold">Inregistrare</h2>
            <h6 class="mb-4">Pentru a crea un cont completeaza datele</h6>
            <InputField label="Email" name="email" bind:value={user.email} />
            <InputField
                label="Username"
                name="username"
                bind:value={user.username}
            />
            <InputField
                label="Parola"
                name="password"
                bind:value={user.password}
                type="password"
            />
            <Btn>Inregistrare</Btn>
            <Btn type="button" on:click={handleNavigateToLogin}>
                Intra in cont
            </Btn>
            <div class="h-6">
                {#if status.error}
                    {status.error.message}
                {/if}
            </div>
        </Form>
    </div>
</Loading>
