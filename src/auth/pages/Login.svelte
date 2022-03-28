<script>
    import { navigate } from 'svelte-routing';
    import {
        Btn,
        FlexColumn,
        Form,
        InputField,
        Loading,
    } from '../../common/components';
    import { createForm } from '../../common/utils';
    import { authService, googleAuthService } from '../data/authService';
    import { validateLogin } from '../data/authUtils';

    let { data, status, submit } = createForm(
        { email: '', password: '' },
        (data) =>
            authService.logInWithEmailAndPassword(data.email, data.password),
        validateLogin
    );

    const logInWithGoogle = async () => {
        await googleAuthService.logInWithGoogle();
    };
</script>

<Loading condition={$status.isLoading}>
    <div class="fullheight flex-centered">
        <Form on:submit={submit} error={$status.error}>
            <h2>Autentificare</h2>
            <InputField label="Email" name="email" bind:value={$data.email} />
            <InputField
                label="Parola"
                name="password"
                type="password"
                bind:value={$data.password}
            />
            <FlexColumn centered>
                <Btn>Intra in cont</Btn>
                <Btn color="tertiary" on:click={() => navigate('register')}>
                    Creeaza cont
                </Btn>
                <Btn type="button" color="secondary" on:click={logInWithGoogle}>
                    Google
                </Btn>
            </FlexColumn>
        </Form>
    </div>
</Loading>
