<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { registerRoute } from '../../routing/routes';
    import { authService, validateLogin } from '../data';

    let user = { email: '', password: '' };
    let status = {
        isLoading: false,
        error: null,
    };

    const logIn = async () => {
        try {
            validateLogin();

            status = { ...status, isLoading: true, error: null };

            await authService.logInWithEmailAndPassword(user);

            status = { ...status, isLoading: false };
        } catch (error) {
            status = { ...status, isLoading: false, error };
        }
    };
</script>

<Loading condition={status.isLoading}>
    <div class="fullscreen centered">
        <Form on:submit={logIn}>
            <h1>Autentificare</h1>
            <h3 class="Login__details">
                Pentru a intra in cont completeaza datele
            </h3>
            <InputField label="Email" name="email" bind:value={user.email} />
            <InputField
                label="Parola"
                name="password"
                type="password"
                bind:value={user.password}
            />
            <Btn>Intra in cont</Btn>
            <Btn type="button" on:click={registerRoute.goTo}>Creeaza cont</Btn>
            <div class="Login__error">
                {#if status.error}
                    {status.error.message}
                {/if}
            </div>
        </Form>
    </div>
</Loading>

<style>
    .Login__details {
        margin-bottom: var(--spacing-s);
    }

    .Login__error {
        margin-top: var(--spacing-s);
        height: 2rem;
        color: var(--clr-secondary-10);
    }
</style>
