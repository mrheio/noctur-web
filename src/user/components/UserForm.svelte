<script>
    import { authStore } from '../../auth/authStore';
    import {
        Btn,
        FlexColumn,
        Form,
        InputField,
        Loading,
    } from '../../common/components';
    import { createForm } from '../../common/utils';
    import userService from '../data/userService';
    import { validateUpdateProfile } from '../data/userUtils';

    $: ({ user } = $authStore);

    let { data, status, submit } = createForm(
        { username: '' },
        userService.updateLoggedUser,
        validateUpdateProfile
    );

    $: {
        data.set({ username: user.username });
    }
</script>

<Loading condition={$status.isLoading}>
    <Form on:submit={submit} error={$status.error}>
        <h1 class="header-l text-center">Profilul tau</h1>
        <InputField
            label="Email"
            name="email"
            bind:value={user.email}
            disabled
        />
        <InputField
            label="Username"
            name="username"
            bind:value={$data.username}
        />
        <FlexColumn centered><Btn>Actualizeaza</Btn></FlexColumn>
    </Form>
</Loading>
