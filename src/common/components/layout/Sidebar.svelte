<script>
    import { CancelIcon, UseSvg } from '../svg';

    export let open = false;

    let classes = 'Sidebar';

    $: classes = `Sidebar ${open ? 'display-block' : 'display-none'}`;
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
        width: min(75vw, 480px);
        height: 100%;
        z-index: var(--z-index-over-4);
        padding-top: var(--navbar-height);
        padding-inline: var(--spacing-s);
    }

    .Sidebar__cancel {
        position: absolute;
        top: var(--navbar-height);
        right: 8px;
    }
</style>
