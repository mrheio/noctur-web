<script>
    export let centered = false;
    export let gap = undefined;

    const classes = () => {
        return `FlexColumn ${centered ? 'FlexColumn--centered' : ''} ${
            gap ? `gap--${gap}` : ''
        }`;
    };
</script>

<div class={classes()}>
    <slot />
</div>

<style>
    .FlexColumn {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    .FlexColumn > :global(*) {
        width: 100%;
    }

    .FlexColumn--centered {
        justify-content: center;
        align-items: center;
    }

    .gap--none {
        gap: 0;
    }

    .gap--xxs {
        gap: var(--gap-xxs);
    }

    .gap--xs {
        gap: var(--gap-xs);
    }

    .gap--s {
        gap: var(--gap-s);
    }

    .gap--m {
        gap: var(--gap-m);
    }

    .gap--l {
        gap: var(--gap-l);
    }

    .gap--xl {
        gap: var(--gap-xl);
    }

    .gap--xxl {
        gap: var(--gap-xxl);
    }
</style>
