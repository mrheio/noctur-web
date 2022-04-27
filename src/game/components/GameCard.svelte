<script>
    import { isAdmin } from '../../auth/authStore';
    import { Card } from '../../common/components';
    import { deleteGame } from '../gamesStore';

    export let game;
</script>

<Card size="fill" outlined="primary">
    <h3 class="header-s">{game.name}</h3>
    <h4 class="text-faded">
        Capacitate maxima echipa: <span>
            {game.capacity}
        </span>
    </h4>
    {#if isAdmin()}
        <button on:click={() => deleteGame(game.id)}> ❌ </button>
    {/if}
</Card>
