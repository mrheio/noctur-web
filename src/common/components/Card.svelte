<div class="transition-ease-in-out" on:click>
    <slot />
</div>

<style>
    div {
        position: relative;
        background: var(--clr-primary-90);
        padding: var(--spacing-s) var(--spacing-m);
        border-radius: var(--rounded-m);
    }

    div:hover {
        background: var(--clr-primary-80);
        transform: scale(100.5%);
    }
</style>
