<script>
    export let variant = undefined;

    const classes = () => {
        return `logo ${variant ? `logo--${variant}` : ''}`;
    };
</script>

<img class={classes()} src="../assets/imgs/logos/logo.png" alt="Noctur" />

<style>
    .logo {
        max-width: 120px;
    }

    .logo--small {
        width: 48px;
    }
</style>
