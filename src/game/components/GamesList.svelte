<script>
    import { onDestroy } from 'svelte';
    import { authStore } from '../../auth/authStore';
    import { Card, Grid, Loading } from '../../common/components';
    import { deleteGame, gamesStore, getGames$ } from '../gamesStore';

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading, games } = $gamesStore);

    const sub = getGames$();

    onDestroy(() => {
        console.log('games list destroyed');
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <Grid>
        {#each games as game}
            <Card>
                <h2>{game.name}</h2>
                <h3>
                    Capacitate maxima echipa: <span>
                        {game.maxTeam}
                    </span>
                </h3>
                {#if loggedUser.isAdmin}
                    <button
                        class="top-right"
                        on:click={() => deleteGame(game.id)}
                    >
                        ❌
                    </button>
                {/if}
            </Card>
        {/each}
    </Grid>
</Loading>

<style>
    .top-right {
        position: absolute;
        top: 2px;
        right: 2px;
        background: none;
        border: none;
        outline: none;
    }

    span {
        color: var(--clr-secondary-50);
    }
</style>
