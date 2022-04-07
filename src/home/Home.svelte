<script>
    import GamesPresentation from './GamesPresentation.svelte';
    import PresentationCards from './PresentationCards.svelte';
</script>

<div class="sections-wrapper">
    <section
        class="fullheight hero-bg bg-overlay bg-overlay--darken flex flex-center text-center"
    >
        <div>
            <h1 class="header-l">Noctur</h1>
            <h2>Gaseste playeri. Aici. Acum</h2>
            <PresentationCards />
        </div>
    </section>
    <section class="text-center">
        <h1 class="header-m">Avem di tate pentru tati</h1>
        <GamesPresentation />
    </section>
</div>

<style>
    .hero-bg {
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
        margin-inline: calc(-1 * var(--page-offset-inline));
        margin-top: calc(-1 * var(--spacing-l));
    }
</style>
