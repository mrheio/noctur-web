<script>
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import { AppRoute, routes } from './routing';
</script>

<Header />

<main class="page">
    {#each routes as route}
        <AppRoute {route} />
    {/each}
</main>

<Footer />
