<script>
    export let small = false;
    export let centerText = false;

    const classes = () => {
        return `card wtransition ${small ? 'card--small' : ''} ${
            centerText ? 'text-align-center' : ''
        }`;
    };
</script>

<div class={classes()} on:click>
    <slot />
</div>

<style>
    .card {
        cursor: pointer;
        background-color: var(--clr-primary-80);
        width: min(100%, 768px);
        border-radius: var(--rounded-m);
        padding: var(--spacing-s) var(--spacing-l);
        position: relative;
    }

    .card:hover {
        background-color: var(--clr-primary-70);
    }

    .card--small {
        width: min(90%, 320px);
    }

    /* .card > :global(*:where(:not(:first-child))) {
        margin-top: var(--spacing-s);
    } */
</style>
