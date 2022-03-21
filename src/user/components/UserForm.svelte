<script>
    import { authStore } from '../../auth/authStore';
    import { Btn, Form, InputField, Loading } from '../../common/components';
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
    <div class="fullscreen centered">
        <Form on:submit={submit} error={$status.error}>
            <h2>Profilul tau</h2>
            <InputField
                label="Username"
                name="username"
                bind:value={$data.username}
            />
            <Btn>Actualizeaza</Btn>
        </Form>
    </div>
</Loading>
