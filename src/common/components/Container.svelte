<script>
    export let fill = false;
    export let centered = false;

    let classes = '';

    $: classes = `container ${fill ? 'container--fill' : ''} ${
        centered ? 'container--centered' : ''
    }`;
</script>

<div class={classes}>
    <slot />
</div>

<style>
    .container {
        padding: var(--spacing-s);
        max-width: 100%;
    }

    @media only screen and (min-width: 992px) {
        .container {
            padding: var(--spacing-m);
            max-width: 60ch;
        }
    }

    .container--fill {
        max-width: 100%;
    }

    .container--centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
