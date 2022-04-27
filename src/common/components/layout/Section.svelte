<script>
    export let type = 'primary';

    let classes = '';

    $: classes = `Section Section--${type}`;
</script>

<div class={classes}>
    <slot />
</div>

<style>
    .Section {
        padding: var(--spacing-s);
        max-width: 100%;
    }

    .Section--primary {
        background-color: var(--clr-primary-100);
    }

    .Section--secondary {
        background-color: var(--clr-primary-100);
    }
</style>
