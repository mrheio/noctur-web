<script>
    export let type = 'submit';
    export let circle = false;
</script>

<button class={`${circle ? 'circle' : 'btn'}`} {type} on:click><slot /></button>

<style>
    .btn {
        color: var(--clr-txt) !important;
        background: var(--clr-primary-50);
        cursor: pointer;
        padding: var(--spacing-s) var(--spacing-m);
        margin: var(--spacing-xs);
        border: none;
        border-radius: 8px;
        outline: none;
        font-weight: 600;
    }

    .btn:hover {
        background: var(--clr-primary-40);
    }

    .btn:active {
        background: var(--clr-primary-60) !important;
    }

    .circle {
        background: var(--clr-secondary-50);
        cursor: pointer;
        width: 56px;
        height: 56px;
        border: none;
        border-radius: 50%;
        outline: none;
    }

    .circle:hover {
        background: var(--clr-secondary-40);
    }

    .circle:active {
        background: var(--clr-secondary-60) !important;
    }
</style>
