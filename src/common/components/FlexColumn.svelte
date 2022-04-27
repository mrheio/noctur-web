<script>
    export let centered = false;

    let classes = '';

    $: classes = `container ${centered ? 'container--centered' : ''} list-flow`;
</script>

<div class={classes}>
    <slot />
</div>
