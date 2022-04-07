<script>
    export let need;

    let classes = '';

    $: classes = `NeedIcon NeedIcon--${need}`;
</script>

<i class={classes} />

<style>
    .NeedIcon {
        --size: 24px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
    }

    .NeedIcon--low {
        background-color: lime;
    }

    .NeedIcon--medium {
        background-color: orange;
    }

    .NeedIcon--high {
        background-color: red;
    }
</style>
