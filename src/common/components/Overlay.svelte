<script>
    let opened = false;

    export const openOverlay = () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = 'no';
        opened = true;
    };

    export const closeOverlay = () => {
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = 'yes';
        opened = false;
    };
</script>

{#if opened}
    <div id="overlay">
        <div class="page flex flex-center">
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
        z-index: var(--z-index-over-6);
        overflow-x: hidden;
    }
</style>
