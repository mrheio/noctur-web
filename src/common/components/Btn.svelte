<script>
    export let type = 'submit';
    export let circle = false;
    export let color = 'primary';
    export let variant = 'basic';

    const chooseColor = () => {
        if (color === 'primary') {
            return '';
        }
        if (color === 'secondary') {
            return 'btn--secondary';
        }
    };

    const classes = () => {
        return `btn ${
            circle ? 'circle flex flex-centered' : ''
        } ${chooseColor()} wtransition`;
    };
</script>

{#if variant === 'google'}
    <button on:click type="button" class="btn btn--google">
        <span>
            <img
                class="btn--google__logo"
                src="../assets/imgs/logos/google_logo.png"
                alt="Google"
            />oogle
        </span>
    </button>
{:else}
    <button class={classes()} {type} on:click>
        <slot />
    </button>
{/if}

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
        background-color: var(--clr-primary-40);
    }

    .btn--secondary,
    .btn--secondary:active {
        background-color: var(--clr-secondary-50);
    }

    .btn--secondary:hover {
        background-color: var(--clr-secondary-40);
    }

    .btn--google__logo {
        display: inline-block;
        width: 28px;
        vertical-align: middle;
    }
</style>
