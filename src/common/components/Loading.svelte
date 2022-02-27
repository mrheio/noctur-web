<script>
    import LoadingIndicator from './LoadingIndicator.svelte';

    export let condition;
</script>

{#if condition}
    <div class="flex items-center justify-center h-[80vh]">
        <LoadingIndicator />
    </div>
{:else}
    <slot />
{/if}
