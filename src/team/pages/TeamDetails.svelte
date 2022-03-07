<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import {
        Btn,
        Loading,
        PageWrapper,
        PlayersDisplay,
    } from '../../common/components';
    import teamService from '../data/teamService';
    import { isInTeam, isTeamFull, isTeamOwner } from '../data/teamUtils';

    export let id;

    let team = null;
    let isLoading = true;

    const sub = teamService.getDetailedTeamById$(id).subscribe({
        next: (t) => {
            team = t;
            isLoading = false;
        },
        error: (error) => {
            navigate('/teams', { replace: true });
        },
    });

    onDestroy(() => {
        sub.unsubscribe();
    });

    const deleteTeam = async () => {
        isLoading = true;
        await teamService.deleteById(team.id);
    };

    const joinTeam = async () => {
        isLoading = true;
        await teamService.addLoggedUserToTeam(team);
    };

    const quitTeam = async () => {
        isLoading = true;
        await teamService.removeLoggedUserFromTeam(team);
    };
</script>

<Loading condition={isLoading}>
    <PageWrapper>
        <h1>{team.name}</h1>
        <h2>Joc: {team.game}</h2>
        <PlayersDisplay filled={team.usids.length} capacity={team.capacity} />
        <p>{team.description}</p>
        <h3 class="players">Players:</h3>
        <div class="player-card-container">
            {#each team.users as user}
                <div class="player-card bold">{user.username}</div>
            {/each}
        </div>
        {#if isTeamOwner(team)}
            <Btn on:click={deleteTeam}>Sterge echipa</Btn>
        {/if}
        {#if !isTeamOwner(team) && !isInTeam(team) && !isTeamFull(team)}
            <Btn on:click={joinTeam}>Intra in echipa</Btn>
        {/if}
        {#if !isTeamOwner(team) && isInTeam(team)}
            <Btn on:click={quitTeam}>Iesi din echipa</Btn>
        {/if}
    </PageWrapper>
</Loading>

<style>
    .players {
        margin-bottom: var(--spacing-s);
    }

    .player-card-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--spacing-s);
    }

    .player-card {
        background: var(--clr-primary-90);
        padding: var(--spacing-m);
        max-width: 300px;
        border-radius: 4px;
        text-align: center;
    }
</style>
