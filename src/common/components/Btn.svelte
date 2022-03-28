<script>
    export let type = 'submit';
    export let circle = false;
    export let color = 'primary';

    const chooseColor = () => {
        if (color === 'primary') {
            return '';
        }
        if (color === 'secondary') {
            return 'btn--secondary';
        }
        if (color === 'tertiary') {
            return 'btn--tertiary';
        }
    };

    const classes = () => {
        return `btn ${
            circle ? 'circle flex-centered' : ''
        } ${chooseColor()} wtransition`;
    };
</script>

<button class={classes()} {type} on:click>
    <slot />
</button>

<style>
    .btn,
    .btn:active {
        cursor: pointer;
        background-color: var(--clr-primary-50);
        color: var(--clr-txt);
        border: none;
        outline: none;
        border-radius: var(--rounded-l);
        font-weight: var(--fw-semibold);
        margin: 0;
        padding: var(--spacing-s) var(--spacing-xxl);
        max-width: 240px;
    }

    .circle,
    .circle:active {
        --size: 64px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        padding: 0;
    }

    .btn:hover {
        background-color: var(--clr-primary-30);
    }

    .btn--secondary,
    .btn--secondary:active {
        background-color: var(--clr-secondary-50);
    }

    .btn--secondary:hover {
        background-color: var(--clr-secondary-30);
    }

    .btn--tertiary,
    .btn--tertiary:active {
        background-color: var(--clr-tertiary-50);
    }

    .btn--tertiary:hover {
        background-color: var(--clr-tertiary-30);
    }
</style>
