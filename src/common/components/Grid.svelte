<div>
    <slot />
</div>

<style>
    div {
        display: grid;
        justify-items: center;
        gap: 12px;
    }

    @media only screen and (min-width: 768px) {
        div {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
