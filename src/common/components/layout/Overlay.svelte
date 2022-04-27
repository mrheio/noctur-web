<script>
    import { CancelIcon, UseSvg } from '../svg';

    export let open = false;

    let classes = 'Overlay';

    $: classes = `Overlay ${open ? 'Overlay--opened' : 'Overlay--closed'}`;

    $: {
        if (open) {
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = 'no';
        } else {
            document.documentElement.style.overflow = 'visible';
            document.body.scroll = 'yes';
        }
    }

    const closeOverlay = () => {
        open = false;
    };
</script>

<div class={classes}>
    <div
        class="page container container--fill container--centered section-flow"
    >
        <slot />
    </div>

    <button
        type="button"
        class="btn--clear absolute-top-right"
        on:click={closeOverlay}
    >
        <UseSvg href="#cancel-icon" size="36" />
    </button>
</div>
<CancelIcon />

<style global>
    .Overlay {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: var(--z-index-over-6);
        overflow-x: hidden;
    }

    .Overlay--closed {
        display: none;
    }

    .Overlay--opened {
        display: block;
    }

    .absolute-top-right {
        position: absolute;
        top: 8px;
        right: 8px;
    }
</style>
