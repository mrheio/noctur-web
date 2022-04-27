<script>
    import { Btn, Card } from '../../../common/components';
    import teamService from '../../data/teamService';
    import { isInTeam, isTeamFull, isTeamOwner } from '../../data/teamUtils';

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

<div class="container container--centered list-flow">
    {#each team.players as player}
        <Card size="fill"><h3>{player.username}</h3></Card>
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
