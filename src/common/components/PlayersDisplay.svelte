<script>
    export let filled = 0;
    export let capacity = 0;
</script>

<span class="PlayersDisplay">
    {#each new Array(filled) as _}
        <i class="icon filled-player" />
    {/each}
    {#each new Array(capacity - filled) as _}
        <i class="icon notFilled-player" />
    {/each}
</span>

<style>
    .PlayersDisplay {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: var(--clr-primary-30);
    }

    .filled-player {
        -webkit-mask-image: url('../assets/svg/player.svg');
        mask-image: url('../assets/svg/player.svg');
    }

    .notFilled-player {
        -webkit-mask-image: url('../assets/svg/nofill_player.svg');
        mask-image: url('../assets/svg/nofill_player.svg');
    }
</style>
