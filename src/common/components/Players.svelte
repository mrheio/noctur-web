<script>
    export let filled = 0;
    export let capacity = 0;
</script>

<span class="Players">
    {#each new Array(filled) as _}
        <i class="Players__icon Players__icon--filled" />
    {/each}
    {#each new Array(capacity - filled) as _}
        <i class="Players__icon Players__icon--clear" />
    {/each}
</span>

<style>
    .Players {
        display: flex;
        gap: var(--gap-s);
    }

    .Players__icon {
        --size: 24px;
        width: var(--size);
        height: var(--size);
        background-color: var(--clr-tertiary-30);
    }

    .Players__icon--filled {
        -webkit-mask-image: url('../assets/svg/player.svg');
        mask-image: url('../assets/svg/player.svg');
    }

    .Players__icon--clear {
        -webkit-mask-image: url('../assets/svg/nofill_player.svg');
        mask-image: url('../assets/svg/nofill_player.svg');
    }
</style>
