<script>
    export let error = undefined;
</script>

<form class="Form subtle-shadow" on:submit|preventDefault>
    <slot />
    <div class="text-center error-wrapper">
        {#if error}
            <span>{error?.message}</span>
        {/if}
    </div>
</form>

<style>
    .Form {
        display: flex;
        flex-direction: column;
        gap: var(--gap-xxl);
        width: min(420px, 90vw);
        padding: var(--spacing-s) var(--spacing-xs);
    }

    .error-wrapper {
        min-height: 32px;
        color: var(--clr-secondary-50);
    }
</style>
