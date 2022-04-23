<script>
    import { Btn, Sidebar } from '../../../common/components';
    import teamService from '../../data/teamService';
    import { isInTeam, isTeamFull, isTeamOwner } from '../../data/teamUtils';

    export let team;
    export let open = false;
    export let alwaysOpen = false;

    const deleteTeam = async () => {
        await teamService.deleteById(team.id);
    };

    const joinTeam = async () => {
        await teamService.addLoggedUserToTeam(team);
    };

    const quitTeam = async () => {
        await teamService.removeLoggedUserFromTeam(team);
    };
</script>

<Sidebar bind:open {alwaysOpen}>
    <h2>Joc: {team.game}</h2>
    <h2>Players:</h2>
    <div class="TeamPlayers__players-container">
        {#each team.players as player}
            <div class="TeamPlayers__player-card">{player.username}</div>
        {/each}
        {#if isTeamOwner(team)}
            <Btn on:click={deleteTeam}>Sterge echipa</Btn>
        {/if}
        {#if !isTeamOwner(team) && !isInTeam(team) && !isTeamFull(team)}
            <Btn on:click={joinTeam}>Intra in echipa</Btn>
        {/if}
        {#if !isTeamOwner(team) && isInTeam(team)}
            <Btn on:click={quitTeam}>Iesi din echipa</Btn>
        {/if}
    </div>
</Sidebar>

<style>
    .TeamPlayers__player-card {
        background-color: var(--clr-primary-80);
        border: 2px solid var(--clr-primary-90);
        padding: var(--spacing-l);
        text-align: center;
        border-radius: var(--rounded-m);
    }

    .TeamPlayers__players-container {
        display: flex;
        flex-direction: column;
        gap: var(--gap-s);
        align-items: center;
    }

    .TeamPlayers__players-container > :global(*) {
        width: 100%;
    }
</style>
