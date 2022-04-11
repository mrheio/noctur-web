<script>
    import { CancelIcon, UseSvg } from './svg';

    export let open = false;

    let classes = 'sidebar';

    $: classes = `Sidebar ${open ? 'Sidebar--opened' : 'Sidebar--closed'}`;
</script>

<aside class={classes}>
    <button class="Sidebar__cancel btn--clear" on:click={() => (open = false)}>
        <UseSvg href="#cancel-icon" />
    </button>
    <slot />
</aside>
<CancelIcon />

<style>
    .Sidebar {
        background-color: var(--clr-primary-100);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(50vw, 320px);
        height: 100%;
        z-index: var(--z-index-over-4);
        padding: var(--navbar-height) var(--spacing-l) 0 var(--spacing-l);
    }

    .Sidebar--closed {
        display: none;
    }

    .Sidebar--opened {
        display: block;
    }

    .Sidebar__cancel {
        position: absolute;
        top: var(--navbar-height);
        right: 8px;
    }
</style>
