<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../../auth/authStore';
    import {
        Card,
        PlayersDisplay,
        SeverityDisplay,
    } from '../../../common/components';
    import { deleteTeam } from '../../teamsStore';

    export let team;

    $: ({ loggedUser } = $authStore);

    const handleDeleteTeam = async () => {
        await deleteTeam(team);
    };

    const handleNavigateToDetails = () => {
        navigate(`/teams/${team.id}`);
    };
</script>

<Card on:click={loggedUser ? handleNavigateToDetails : null}>
    <h2 class="TeamCard__title bold">{team.name}</h2>
    <h3 class="TeamCard__game">
        Joc: <span>{team.gameName}</span>
    </h3>
    <div class="TeamCard__bottom">
        <PlayersDisplay
            currentPlayers={team.usersIds.length}
            neededPlayers={team.neededPlayers}
        />
        <SeverityDisplay severity={team.severity} />
    </div>
    {#if loggedUser?.isAdmin || team.userId === loggedUser?.id}
        <button class="TeamCard__top-left" on:click={handleDeleteTeam}>
            ❌
        </button>
    {/if}
</Card>

<style>
    .TeamCard__title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .TeamCard__game {
        margin-bottom: var(--spacing-m);
    }

    .TeamCard__game span {
        color: var(--clr-secondary-50);
    }

    .TeamCard__bottom {
        display: flex;
        gap: 4px;
        justify-content: space-between;
    }

    .TeamCard__top-left,
    .TeamCard__top-left:hover,
    .TeamCard__top-left:active {
        cursor: pointer;
        position: absolute;
        top: 4px;
        right: 4px;
        background: none;
        border: none;
        outline: none;
    }
</style>
