<script>
    export let error = undefined;
</script>

<form class="Form" on:submit|preventDefault>
    <slot />
    <div class="error-container">
        {#if error}
            <span class="error">{error?.message}</span>
        {/if}
    </div>
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

    .error-container {
        min-height: 32px;
    }

    .error {
        color: var(--clr-secondary-50);
        font-size: var(--fs-h-s);
    }
</style>
