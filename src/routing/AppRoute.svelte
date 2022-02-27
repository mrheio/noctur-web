<script>
    import { Route } from 'svelte-routing';
    import NoAuthGuard from './NoAuthGuard.svelte';
    import PrivateGuard from './PrivateGuard.svelte';

    export let route;
</script>

<Route path={route.path} let:params>
    {#if route.private}
        <PrivateGuard>
            <svelte:component this={route.component} {...params} />
        </PrivateGuard>
    {/if}
    {#if route.notAuthed}
        <NoAuthGuard>
            <svelte:component this={route.component} {...params} />
        </NoAuthGuard>
    {/if}
</Route>
