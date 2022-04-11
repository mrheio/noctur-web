<script>
    export let href;
    export let fill = 'text';
    export let size = '24';

    let classes = 'icon';

    $: classes = `icon icon--${size} icon--${fill}`;
</script>

<svg class={classes} viewBox="0 0 24 24"><use {href} /></svg>

<style>
    .icon {
        display: inline-block;
        width: var(--size);
        height: var(--size);
    }

    .icon:hover {
        fill: var(--clr-primary-20);
    }

    .icon--24 {
        --size: 24px;
    }

    .icon--36 {
        --size: 36px;
    }

    .icon--48 {
        --size: 48px;
    }

    .icon--64 {
        --size: 64px;
    }

    .icon--text {
        fill: var(--clr-text);
    }

    .icon--primary {
        fill: var(--clr-primary-30);
    }

    .icon--secondary {
        fill: var(--clr-secondary-30);
    }

    .icon--secondary:hover {
        fill: var(--clr-secondary-20);
    }
</style>
