<script>
    export let error = undefined;
    export let centered = false;

    let classes = 'Form';

    $: classes = `Form ${centered ? 'Form--centered' : ''}`;
</script>

<form class={classes} on:submit|preventDefault>
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

    .Form--centered {
        align-items: center;
    }

    .Form--centered > :global(*) {
        width: 100%;
    }

    .error-wrapper {
        min-height: 32px;
        color: var(--clr-secondary-50);
    }
</style>
