<script>
    import { navigate } from 'svelte-routing';
    import {
        Btn,
        FlexColumn,
        Form,
        InputField,
        Loading,
        Logo,
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
    <div class="fullheight flex-col flex-centered">
        <Logo />
        <Form on:submit={submit} error={$status.error}>
            <h1 class="text-center">Baga date intra contu</h1>
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
                <h4 class="text-center">Intra cu cont de:</h4>
                <Btn variant="google" on:click={logInWithGoogle} />
            </FlexColumn>
        </Form>
    </div>
</Loading>
