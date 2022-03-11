<script>
    import LoadingIndicator from './LoadingIndicator.svelte';

    export let condition;
</script>

{#if condition}
    <div class="centered">
        <LoadingIndicator />
    </div>
{:else}
    <slot />
{/if}
