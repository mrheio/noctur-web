<script>
    export let currentPlayers = 0;
    export let neededPlayers = 0;
</script>

<span class="flex gap-1 flex-wrap max-w-[240px]">
    {#each new Array(currentPlayers) as _}
        <i class="icon filled" />
    {/each}
    {#each new Array(neededPlayers - currentPlayers) as _}
        <i class="icon notFilled" />
    {/each}
</span>

<style>
    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        mask-size: cover;
        @apply bg-secondary-300;
    }
    .filled {
        mask: url('../assets/svg/player.svg');
    }
    .notFilled {
        mask: url('../assets/svg/nofill_player.svg');
    }
</style>
