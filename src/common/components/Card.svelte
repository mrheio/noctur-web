<script>
    export let size = 's';
    export let color = 'primary';
    export let outlined = undefined;
    export let centered = false;
    export let clickable = false;

    let classes = '';

    $: classes = `card card--${size} card--${color} ${
        outlined ? `card--${outlined}-outlined` : ''
    } ${centered ? 'card--centered' : ''}
    ${clickable ? 'card--clickable' : ''}`;
</script>

<div class={classes} on:click>
    <slot />
</div>

<style>
    .card {
        border-radius: var(--rounded-m);
        padding: var(--spacing-m);
        text-align: center;
    }

    .card--centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card--fill {
        width: 100%;
    }

    .card--s {
        width: min(100%, 45ch);
    }

    .card--m {
        width: min(100%, 55ch);
    }

    .card--l {
        width: min(100%, 65ch);
    }

    .card--clickable {
        cursor: pointer;
    }

    .card--black {
        background-color: rgba(0, 0, 0, 0.45);
    }

    .card--primary {
        background-color: var(--clr-primary-80);
    }

    .card--primary:hover {
        background-color: var(--clr-primary-80);
    }

    .card--primary-outlined {
        border: 2px solid var(--clr-primary-100);
    }

    .card--secondary {
        background-color: var(--clr-secondary-80);
    }

    .card--secondary:hover {
        background-color: var(--clr-secondary-80);
    }
</style>
