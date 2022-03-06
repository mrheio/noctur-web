<script>
    import { navigate } from 'svelte-routing';
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { createForm } from '../../common/utils';
    import authService from '../data/authService';
    import { validateLogin } from '../data/userUtils';

    let { data, status, submit } = createForm(
        { email: '', password: '' },
        (data) =>
            authService.logInWithEmailAndPassword(data.email, data.password),
        validateLogin
    );
</script>

<Loading condition={$status.isLoading}>
    <div class="fullscreen centered">
        <Form on:submit={submit}>
            <h1>Autentificare</h1>
            <h3 class="Login__details">
                Pentru a intra in cont completeaza datele
            </h3>
            <InputField label="Email" name="email" bind:value={$data.email} />
            <InputField
                label="Parola"
                name="password"
                type="password"
                bind:value={$data.password}
            />
            <Btn>Intra in cont</Btn>
            <Btn type="button" on:click={() => navigate('register')}>
                Creeaza cont
            </Btn>
            <div class="Login__error">
                {$status.error?.message ?? ''}
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
