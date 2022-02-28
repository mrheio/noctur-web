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
        <div class="flex gap-2 items-center mb-4">
            <SeverityDisplay severity={team.severity} />
            <h2 class="text-accent-main font-bold">
                {team.gameName} - {team.name}
            </h2>
        </div>
        <PlayersDisplay
            currentPlayers={team.usersIds.length}
            neededPlayers={team.neededPlayers}
        />
        <div class="mt-6 min-h-[48px] mb-6">{team.description}</div>
        <h3 class="mb-2">Jucatori in echipa:</h3>
        <div class="max-w-xl flex flex-col gap-2">
            {#each team.users as user}
                <div
                    class="flex items-center justify-center h-12 bg-secondary-700 rounded-lg"
                >
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
