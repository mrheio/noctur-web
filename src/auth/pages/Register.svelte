<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import authService from '../data/authService';

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
</script>

<Loading condition={status.isloading}>
    <div class="text-center">
        <Form on:submit={handleRegister}>
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
            {#if status.error}
                <div>{status.error.message}</div>
            {/if}
        </Form>
    </div>
</Loading>
