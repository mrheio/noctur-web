<script>
    import { onDestroy, onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import {
        InfoIcon,
        Loading,
        Sidebar,
        UseSvg,
    } from '../../../common/components';
    import teamService from '../../data/teamService';
    import { isInTeam } from '../../data/teamUtils';
    import PlayersList from './PlayersList.svelte';
    import TeamChat from './TeamChat.svelte';

    export let id;

    let team = null;
    let isLoading = true;
    let sidebarOpen = false;
    let wideScreen = false;

    const teamSub = teamService.getDetailedTeamById$(id).subscribe({
        next: (t) => {
            team = t;
            isLoading = false;
        },
        error: (error) => {
            navigate('/teams', { replace: true });
        },
    });

    onDestroy(() => {
        teamSub.unsubscribe();
    });

    const openSidebar = () => {
        sidebarOpen = true;
    };

    const isWideScreen = () => {
        const { innerWidth } = window;
        if (innerWidth > 1280) {
            wideScreen = true;
        } else {
            wideScreen = false;
        }
    };

    onMount(() => {
        isWideScreen();
    });
</script>

<svelte:window on:resize={isWideScreen} />

<Loading condition={isLoading}>
    <div class="TeamDetails container container--fill">
        <div class="TeamDetails__content">
            <h1>{team.name}</h1>
            <div class="TeamDetails__chat">
                {#if isInTeam(team)}
                    <TeamChat teamId={id} />
                {:else}
                    <div class="container container--fill container--centered">
                        <h3>Nu esti in echipa.</h3>
                    </div>
                {/if}
            </div>
        </div>
        {#if wideScreen}
            <div class="TeamDetails__aside">
                <h2>Joc: {team.game}</h2>
                <h2>Players:</h2>
                <PlayersList {team} />
            </div>
        {:else}
            <aside>
                <button type="button" class="btn--clear" on:click={openSidebar}>
                    <UseSvg href="#info-icon" size="36" />
                </button>
            </aside>

            <Sidebar bind:open={sidebarOpen}>
                <h2>Joc: {team.game}</h2>
                <h2>Players:</h2>
                <PlayersList {team} />
            </Sidebar>
        {/if}
    </div>
</Loading>

<InfoIcon />

<style>
    .TeamDetails {
        height: calc(100vh - var(--navbar-height));
        display: flex;
    }

    .TeamDetails :global(*)::-webkit-scrollbar-track {
        margin-block: 2rem;
        opacity: 0.3;
        background-color: var(--clr-primary-80);
    }

    .TeamDetails__content {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: var(--spacing-s);
    }

    .TeamDetails__chat {
        height: 100%;
        width: 100%;
        position: relative;
    }

    .TeamDetails__aside {
        width: 30%;
        overflow-y: auto;
    }

    @media (min-width: 1280px) {
        .TeamDetails {
            gap: var(--spacing-s);
        }

        .TeamDetails__content,
        .TeamDetails__aside {
            background-color: var(--clr-primary-100);
            margin: var(--spacing-s);
            border-radius: 8px;
        }

        .TeamDetails__aside {
            padding: var(--spacing-s);
        }
    }
</style>
