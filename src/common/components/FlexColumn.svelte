<script>
    export let centered = false;

    const classes = () => {
        return `FlexColumn ${centered ? 'FlexColumn--centered' : ''}`;
    };
</script>

<div class={classes()}>
    <slot />
</div>

<style>
    .FlexColumn {
        display: flex;
        flex-direction: column;
        gap: var(--gap-m);
    }

    .FlexColumn > :global(*) {
        width: 100%;
    }

    .FlexColumn--centered {
        justify-content: center;
        align-items: center;
    }
</style>
