<script>
    import { AppRoute, routes } from './routing';
</script>

<main>
    {#each routes as route}
        <AppRoute {route} />
    {/each}
</main>

<style>
    main {
        @apply mx-12 my-6;
    }
</style>
