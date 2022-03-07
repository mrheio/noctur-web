<script>
    import { navigate } from 'svelte-routing';
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { createForm } from '../../common/utils';
    import authService from '../data/authService';
    import { validateRegister } from '../data/userUtils';

    let { data, status, submit } = createForm(
        { email: '', username: '', password: '' },
        authService.register,
        validateRegister
    );
</script>

<Loading condition={$status.isLoading}>
    <div class="fullscreen centered">
        <Form on:submit={submit}>
            <h2>Inregistrare</h2>
            <div class="inputs">
                <InputField
                    label="Email"
                    name="email"
                    bind:value={$data.email}
                />
                <InputField
                    label="Username"
                    name="username"
                    bind:value={$data.username}
                />
                <InputField
                    label="Parola"
                    name="password"
                    bind:value={$data.password}
                    type="password"
                />
            </div>
            <div class="buttons">
                <Btn>Inregistrare</Btn>
                <Btn
                    type="button"
                    color="tertiary"
                    on:click={() => navigate('login')}
                >
                    Intra in cont
                </Btn>
            </div>
            <div class="Register__error">
                {$status.error?.message ?? ''}
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

    .inputs {
        margin-bottom: var(--spacing-s);
    }

    .buttons {
        display: flex;
        flex-direction: column;
    }
</style>
