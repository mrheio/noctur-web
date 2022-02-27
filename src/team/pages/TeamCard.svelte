<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import { PlayersDisplay, SeverityDisplay } from '../../common/components';
    import { deleteTeam } from '../teamsStore';

    export let team;

    $: ({ loggedUser } = $authStore);

    const handleDeleteTeam = async () => {
        await deleteTeam(team);
    };

    const handleNavigateToDetails = () => {
        navigate(`/teams/${team.id}`);
    };
</script>

<div
    class="relative px-4 py-2 bg-secondary-700 border-2 border-secondary-600 rounded-2xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-in-out"
    on:click={handleNavigateToDetails}
>
    <h4 class="text-accent-main font-bold">{team.name}</h4>
    <h5>
        Joc: <span class="text-secondary-200 font-bold">{team.gameName}</span>
    </h5>
    <div class="flex justify-between">
        <PlayersDisplay
            currentPlayers={team.usersIds.length}
            neededPlayers={team.neededPlayers}
        />
        <SeverityDisplay severity={team.severity} />
    </div>
    {#if loggedUser.isAdmin || team.userId === loggedUser.id}
        <button
            class="absolute top-2 right-2 border-none"
            on:click={handleDeleteTeam}
        >
            ❌
        </button>
    {/if}
</div>
