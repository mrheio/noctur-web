<script>
    export let type = 'submit';
    export let circle = false;
    export let color = 'primary';

    const chooseClass = () => {
        return circle ? 'circle' : 'btn';
    };
</script>

<button
    class={`${chooseClass()} ${color} transition-ease-in-out`}
    {type}
    on:click
>
    <slot />
</button>

<style>
    .btn {
        color: var(--clr-txt);
        border: none;
        outline: none;
        border-radius: var(--rounded-l);
        margin: 0;
        padding: var(--spacing-s) var(--spacing-m);
        font-weight: var(--fw-semibold);
        cursor: pointer;
        max-width: 320px;
        width: 160px;
        min-width: none;
    }

    .circle {
        cursor: pointer;
        border: none;
        outline: none;
        width: 64px;
        height: 64px;
        border-radius: 50%;
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
