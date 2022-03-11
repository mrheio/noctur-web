<script>
    import { writable } from 'svelte/store';

    export const overlayStore = writable(false);
    const { set } = overlayStore;

    export const openOverlay = () => {
        set(true);
    };

    export const closeOverlay = () => {
        set(false);
    };
</script>

{#if $overlayStore}
    <div id="overlay">
        <div class="fullscreen centered">
            <slot />
        </div>
    </div>
{/if}

<style global>
    #overlay {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: var(--z-index-over-4);
        overflow-x: hidden;
    }
</style>
