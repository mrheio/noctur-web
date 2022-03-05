<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { loginRoute } from '../../routing/routes';
    import { authService, validateRegister } from '../data';

    let user = {
        email: '',
        username: '',
        password: '',
    };
    let status = {
        isloading: false,
        error: null,
    };

    const register = async () => {
        try {
            validateRegister();

            status = { ...status, isloading: true, error: null };

            await authService.register(user);

            status = { ...status, isloading: false };
        } catch (error) {
            status = { ...status, isloading: false, error };
        }
    };
</script>

<Loading condition={status.isloading}>
    <div class="fullscreen centered">
        <Form on:submit={register}>
            <h1>Inregistrare</h1>
            <h3>Pentru a crea un cont completeaza datele</h3>
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
            <Btn type="button" on:click={loginRoute.goTo}>Intra in cont</Btn>
            <div class="Register__error">
                {#if status.error}
                    {status.error.message}
                {/if}
            </div>
        </Form>
    </div>
</Loading>

<style>
    .Register__error {
        margin-top: var(--spacing-s);
        height: 2rem;
        color: var(--clr-secondary-10);
    }
</style>
