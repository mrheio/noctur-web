<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../auth/authStore';

    $: ({ loggedUser } = $authStore);

    $: {
        if (!loggedUser) {
            navigate('/login', { replace: true });
        }
    }
</script>

{#if loggedUser}
    <slot />
{/if}
