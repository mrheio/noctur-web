<script>
    export let type = 'submit';
    export let circle = false;
    export let color = 'primary';

    const chooseClass = () => {
        return circle ? 'circle' : 'btn';
    };
</script>

<button class={`${chooseClass()} ${color}`} {type} on:click><slot /></button>

<style>
    .btn {
        color: var(--clr-txt) !important;
        cursor: pointer;
        padding: var(--spacing-s) var(--spacing-m);
        margin: var(--spacing-xs);
        border: none;
        border-radius: 8px;
        outline: none;
        font-weight: 600;
    }

    .circle {
        cursor: pointer;
        width: 56px;
        height: 56px;
        border: none;
        border-radius: 50%;
        outline: none;
    }

    .primary {
        background: var(--clr-primary-50);
    }

    .primary:hover {
        background: var(--clr-primary-40);
    }

    .primary:active {
        background: var(--clr-primary-60);
    }

    .secondary {
        background: var(--clr-secondary-50);
    }

    .secondary:hover {
        background: var(--clr-secondary-30);
    }

    .secondary:active {
        background: var(--clr-secondary-60);
    }

    .tertiary {
        background: var(--clr-tertiary-50);
    }

    .tertiary:hover {
        background: var(--clr-tertiary-40);
    }

    .tertiary:active {
        background: var(--clr-tertiary-60);
    }
</style>
