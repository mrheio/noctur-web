<script>
    import { isAdmin } from '../../auth/authStore';
    import { Card } from '../../common/components';
    import { deleteGame } from '../gamesStore';

    export let game;
</script>

<Card>
    <h2>{game.name}</h2>
    <h3>
        Capacitate maxima echipa: <span>
            {game.capacity}
        </span>
    </h3>
    {#if isAdmin()}
        <button class="top-right" on:click={() => deleteGame(game.id)}>
            ❌
        </button>
    {/if}
</Card>

<style>
    .top-right {
        cursor: pointer;
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
