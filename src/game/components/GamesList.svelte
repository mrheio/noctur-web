<script>
    import { authStore } from '../../auth/authStore';
    import { Card, Grid } from '../../common/components';
    import { deleteGame, gamesStore } from '../gamesStore';

    $: ({ loggedUser } = $authStore);
    $: ({ games } = $gamesStore);

    const handleDeleteGame = async (gameId) => {
        await deleteGame(gameId);
    };
</script>

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
                    on:click={() => handleDeleteGame(game.id)}
                >
                    ❌
                </button>
            {/if}
        </Card>
    {/each}
</Grid>

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
