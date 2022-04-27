<script>
    export let size = undefined;

    const classes = () => {
        return `logo ${size ? `logo--${size}` : ''}`;
    };
</script>

<img class={classes()} src="../assets/imgs/logos/logo.png" alt="Noctur" />

<style>
    .logo {
        max-width: 120px;
    }

    .logo--small {
        width: 42px;
    }
</style>
