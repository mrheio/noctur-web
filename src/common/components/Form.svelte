<script>
    export let error = undefined;
</script>

<form class="Form" on:submit|preventDefault>
    <slot />
    <div class="text-align-center">
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
    }
</style>
