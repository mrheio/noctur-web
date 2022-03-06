<div class="wtransition" on:click>
    <slot />
</div>

<style>
    div {
        position: relative;
        cursor: default;
        background: var(--clr-primary-90);
        border-radius: 8px;
        padding: var(--spacing-s);
    }

    div:hover {
        transform: scale(100.5%);
        background: var(--clr-primary-80);
    }
</style>
