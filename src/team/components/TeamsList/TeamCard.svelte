<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../../auth/authStore';
    import {
        PlayersDisplay,
        SeverityDisplay,
    } from '../../../common/components';
    import { deleteTeam } from '../../teamsStore';

    export let team;

    $: ({ loggedUser } = $authStore);
    let classes = 'bg ';

    onMount(() => {
        if (team.gameName === 'LOL') {
            classes = classes + 'bg--lol';
            return;
        }
        if (team.gameName === 'CSGO') {
            classes = classes + 'bg--csgo';
            return;
        }
        if (team.gameName === 'Dota 2') {
            classes = classes + 'bg--dota';
            return;
        }
    });

    const handleDeleteTeam = async () => {
        await deleteTeam(team);
    };

    const handleNavigateToDetails = () => {
        navigate(`/teams/${team.id}`);
    };
</script>

<div
    class={`relative px-4 py-2 bg-secondary-700 rounded-2xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-in-out cursor-default ${classes}`}
    on:click={loggedUser ? handleNavigateToDetails : null}
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
    {#if loggedUser?.isAdmin || team.userId === loggedUser?.id}
        <button
            class="absolute top-2 right-2 border-none"
            on:click={handleDeleteTeam}
        >
            ❌
        </button>
    {/if}
</div>

<style>
    .bg {
        background: url('../assets/imgs/gaming_bg_2.jpg') no-repeat center/cover;
        @apply relative z-0;
    }
    .bg::after {
        content: '';
        @apply absolute top-0 left-0 h-full w-full bg-black opacity-40 z-10;
    }
    .bg * {
        @apply relative z-20;
    }
    .bg--lol {
        background: url('../assets/imgs/lol_bg_3.jpg') no-repeat center/cover;
    }
    .bg--csgo {
        background: url('../assets/imgs/cs_bg_2.jpg') no-repeat center/cover;
    }
    .bg--dota {
        background: url('../assets/imgs/dota2_bg_1.jpg') no-repeat center/cover;
    }
</style>
