<form class="Form" on:submit|preventDefault>
    <slot />
</form>

<style>
    .Form {
        display: flex;
        flex-direction: column;
        gap: 4px;
        text-align: center;
        max-width: var(--breakpoint-s);
        background: var(--clr-primary-90);
        padding: var(--spacing-m);
    }
</style>
