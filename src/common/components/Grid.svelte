<div class="grid">
    <slot />
</div>

<style>
    .grid {
        display: grid;
        gap: var(--gap-m);
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
