<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../auth/authStore';

    $: ({ user } = $authStore);

    $: {
        if (!user) {
            navigate('/login', { replace: true });
        }
    }
</script>

{#if user}
    <slot />
{/if}
