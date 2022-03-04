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
    <div id="overlay" class="wrapper">
        <div class="wtransition centered content">
            <slot />
        </div>
    </div>
{/if}

<style global>
    .wrapper {
        background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
    }

    .wrapper > * {
        z-index: 20;
    }

    .content {
        height: 100%;
        position: relative;
    }
</style>
