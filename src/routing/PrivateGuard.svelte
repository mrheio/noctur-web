<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../auth/authStore';

    $: ({ user } = $authStore);

    $: {
        if (!user) {
            navigate('/login', { replace: true });
        }
        if (user?.username === '') {
            navigate('/user/profile');
        }
    }
</script>

{#if user}
    <slot />
{/if}
