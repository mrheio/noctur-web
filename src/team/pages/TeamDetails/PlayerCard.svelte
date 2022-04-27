<script>
    export let player;
</script>

<div class="PlayerCard"><span class="header-s">{player.username}</span></div>

<style>
    .PlayerCard {
        background-color: var(--clr-primary-80);
        border: 2px solid var(--clr-primary-90);
        padding: var(--spacing-l);
        text-align: center;
        border-radius: 18px;
    }
</style>
