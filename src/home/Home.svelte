<script>
    import GamesPresentation from './GamesPresentation.svelte';
    import PresentationCards from './PresentationCards.svelte';
</script>

<section
    class="container container--fill container--centered section-flow full-height hero-bg bg-overlay bg-overlay--darken text-center"
>
    <h1 class="header-l">Noctur</h1>
    <h2>Gaseste playeri. Aici. Acum</h2>
    <PresentationCards />
</section>
<section class="container container--fill section-flow text-center">
    <h1 class="header-m">Avem di tate pentru tati</h1>
    <GamesPresentation />
</section>

<style>
    .hero-bg {
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
    }
</style>
