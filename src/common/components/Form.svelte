<form class="Form" on:submit|preventDefault>
    <slot />
</form>

<style>
    .Form {
        padding: var(--spacing-l) var(--spacing-m);
        border-radius: var(--rounded-s);
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
</style>
