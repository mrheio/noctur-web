<script>
    import { Route } from 'svelte-routing';
    import NoAuthGuard from './NoAuthGuard.svelte';
    import PrivateGuard from './PrivateGuard.svelte';

    export let route;
</script>

<Route path={route.path} let:params>
    {#if route.access === 'private'}
        <PrivateGuard>
            <svelte:component this={route.component} {...params} />
        </PrivateGuard>
    {/if}
    {#if route.access === 'notLoggedIn'}
        <NoAuthGuard>
            <svelte:component this={route.component} {...params} />
        </NoAuthGuard>
    {/if}
    {#if route.access === 'public'}
        <svelte:component this={route.component} {...params} />
    {/if}
</Route>
