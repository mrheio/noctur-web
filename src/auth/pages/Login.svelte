<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import authService from '../data/authService';

    let user = { email: '', password: '' };
    let status = {
        isLoading: false,
        error: null,
    };

    const handleLogIn = async () => {
        try {
            status = { ...status, isLoading: true, error: null };

            await authService.logInWithEmailAndPassword(
                user.email,
                user.password
            );

            status = { ...status, isLoading: false };
        } catch (error) {
            status = { ...status, isLoading: false, error };
        }
    };
</script>

<Loading condition={status.isLoading}>
    <div class="text-center">
        <Form on:submit={handleLogIn}>
            <InputField label="Email" name="email" bind:value={user.email} />
            <InputField
                label="Parola"
                name="password"
                type="password"
                bind:value={user.password}
            />
            <Btn>Intra in cont</Btn>
            {#if status.error}
                <div>{status.error.message}</div>
            {/if}
        </Form>
    </div>
</Loading>
