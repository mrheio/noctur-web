<script>
    import LoadingIndicator from './LoadingIndicator.svelte';

    export let condition;
</script>

{#if condition}
    <div class="fullheight container container-fill container--centered">
        <LoadingIndicator />
    </div>
{:else}
    <slot />
{/if}
