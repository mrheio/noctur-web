<script>
    import { authStore } from '../../auth/authStore';
    import { deleteGame, gamesStore } from '../gamesStore';

    $: ({ loggedUser } = $authStore);
    $: ({ games } = $gamesStore);

    const handleDeleteGame = async (gameId) => {
        await deleteGame(gameId);
    };
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each games as game}
        <div
            class="relative px-6 py-4 bg-secondary-700 border-2 border-secondary-600 rounded-2xl"
        >
            <h5 class="font-bold text-accent-main">{game.name}</h5>
            <p>
                Capacitate maxima echipa: <span
                    class="text-accent-main font-bold"
                >
                    {game.maxTeam}
                </span>
            </p>
            {#if loggedUser.isAdmin}
                <button
                    class="absolute top-2 right-2 border-none"
                    on:click={() => handleDeleteGame(game.id)}
                >
                    ❌
                </button>
            {/if}
        </div>
    {/each}
</div>
