<script>
    import LoadingIndicator from './LoadingIndicator.svelte';

    export let condition;
</script>

{#if condition}
    <div class="fullscreen centered">
        <LoadingIndicator />
    </div>
{:else}
    <slot />
{/if}
