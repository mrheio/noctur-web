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
    import { authService } from '../data/authService';
    import { validateRegister } from '../data/authUtils';

    let { data, status, submit } = createForm(
        { email: '', username: '', password: '' },
        authService.register,
        validateRegister
    );
</script>

<Loading condition={$status.isLoading}>
    <div
        class="container container--fill container--centered section-flow full-height"
    >
        <Form on:submit={submit} error={$status.error}>
            <h1 class="text-center">Creeaza cont</h1>
            <InputField label="Email" name="email" bind:value={$data.email} />
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
            <FlexColumn centered>
                <Btn>Inregistrare</Btn>
                <Btn
                    type="button"
                    color="tertiary"
                    on:click={() => navigate('login')}
                >
                    Intra in cont
                </Btn>
            </FlexColumn>
        </Form>
    </div>
</Loading>
