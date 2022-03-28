<script>
    export let need;

    const chooseNeed = () => {
        if (need === 'low') {
            return 'NeedIcon--green';
        }
        if (need === 'medium') {
            return 'NeedIcon--orange';
        }
        if (need === 'high') {
            return 'NeedIcon--red';
        }
        return '';
    };

    const classes = () => {
        return `NeedIcon ${chooseNeed()}`;
    };
</script>

<i class={classes()} />

<style>
    .NeedIcon {
        --size: 24px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
    }

    .NeedIcon--green {
        background-color: lime;
    }

    .NeedIcon--orange {
        background-color: orange;
    }

    .NeedIcon--red {
        background-color: red;
    }
</style>
