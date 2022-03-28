<div class="grid-wrapper">
    <slot />
</div>

<style>
    .grid-wrapper {
        display: grid;
        gap: var(--gap-m);
    }

    @media (min-width: 768px) {
        .grid-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1280px) {
        .grid-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
