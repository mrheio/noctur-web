<script>
    import { isAdmin } from '../../auth/authStore';
    import { Card } from '../../common/components';
    import { deleteGame } from '../gamesStore';

    export let game;
</script>

<Card>
    <h3>{game.name}</h3>
    <h4>
        Capacitate maxima echipa: <span>
            {game.capacity}
        </span>
    </h4>
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

    h4 {
        color: var(--clr-txt-gray);
        font-weight: normal;
    }

    span {
        /* color: var(--clr-secondary-50); */
        font-weight: bold;
    }
</style>
