<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import {
        Card,
        PlayersDisplay,
        SeverityDisplay,
    } from '../../common/components';
    import { deleteTeam } from '../teamsStore';

    export let team;

    $: ({ user } = $authStore);

    const handleNavigateToDetails = () => {
        navigate(`/teams/${team.id}`);
    };
</script>

<Card on:click={user ? handleNavigateToDetails : null}>
    <h2 class="TeamCard__title bold">{team.name}</h2>
    <h3 class="TeamCard__game">
        Joc: <span>{team.game}</span>
    </h3>
    <div class="TeamCard__bottom">
        <PlayersDisplay filled={team.usids.length} capacity={team.capacity} />
        <SeverityDisplay need={team.need} />
    </div>
    {#if user?.isAdmin || team.uid === user?.id}
        <button class="TeamCard__top-left" on:click={() => deleteTeam(team)}>
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
