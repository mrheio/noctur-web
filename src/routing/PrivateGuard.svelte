<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../auth/authStore';
    import { authService } from '../auth/data/authService';

    $: ({ user } = $authStore);

    $: {
        (() => {
            if (!user) {
                navigate('/login', { replace: true });
                return;
            }
            if (user) {
                if (!authService.isEmailVerified()) {
                    navigate('/user/email-verification');
                    return;
                }
                if (user.username === '') {
                    navigate('/user/profile');
                    return;
                }
            }
        })();
    }
</script>

{#if user}
    <slot />
{/if}
