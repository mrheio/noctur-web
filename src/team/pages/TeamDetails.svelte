<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import {
        Btn,
        Loading,
        PlayersDisplay,
        SeverityDisplay,
    } from '../../common/components';
    import detailedTeamService from '../data/detailedTeamService';
    import { deleteTeam, joinTeam, quitTeam, teamsStore } from '../teamsStore';

    export let id;

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: teamLoading } = $teamsStore);

    let team = null;
    let isLoading = true;

    const sub = detailedTeamService.getDetailedTeamById$(id).subscribe({
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

    const handleDeleteTeam = async () => {
        await deleteTeam(team);
    };

    const handleJoinTeam = async () => {
        await joinTeam(team);
    };

    const handleQuitTeam = async () => {
        await quitTeam(team);
    };
</script>

<Loading condition={isLoading || teamLoading}>
    {#if team}
        <div>
            <SeverityDisplay severity={team.severity} />
            <h2>
                {team.gameName} - {team.name}
            </h2>
        </div>
        <PlayersDisplay
            currentPlayers={team.usersIds.length}
            neededPlayers={team.neededPlayers}
        />
        <div>{team.description}</div>
        <h3>Jucatori in echipa:</h3>
        <div>
            {#each team.users as user}
                <div>
                    <h5>{user.username}</h5>
                </div>
            {/each}
            {#if loggedUser.id === team.userId}
                <Btn on:click={handleDeleteTeam}>Sterge echipa</Btn>
            {/if}
            {#if loggedUser.id !== team.userId && team.usersIds.some((id) => id === loggedUser.id)}
                <Btn on:click={handleQuitTeam}>Iesi din echipa</Btn>
            {/if}
            {#if loggedUser.id !== team.userId && !team.usersIds.some((id) => id === loggedUser.id) && team.usersIds.length < team.neededPlayers}
                <Btn on:click={handleJoinTeam}>Intra in echipa</Btn>
            {/if}
        </div>
    {/if}
</Loading>
