<script>
    import { Btn } from '../../../common/components';
    import teamService from '../../data/teamService';
    import { isInTeam, isTeamFull, isTeamOwner } from '../../data/teamUtils';
    import PlayerCard from './PlayerCard.svelte';

    export let team;

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

<div class="PlayersList">
    {#each team.players as player}
        <PlayerCard {player} />
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

<style>
    .PlayersList {
        display: flex;
        flex-direction: column;
        gap: var(--gap-s);
        align-items: center;
    }

    .PlayersList > :global(*) {
        width: 100%;
    }
</style>
