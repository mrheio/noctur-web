<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { InfoIcon, Loading, UseSvg } from '../../../common/components';
    import teamService from '../../data/teamService';
    import { isInTeam } from '../../data/teamUtils';
    import TeamChat from './TeamChat.svelte';
    import TeamPlayers from './TeamPlayers.svelte';

    export let id;

    let team = null;
    let isLoading = true;
    let sidebarOpen = false;

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

    const wideScreen = () => {
        return screen.width > 1300;
    };
</script>

<Loading condition={isLoading}>
    <div class="TeamDetails">
        <div class="TeamDetails__content">
            <h1>{team.name}</h1>
            <div class="TeamDetails__chat">
                {#if isInTeam(team)}
                    <TeamChat teamId={id} />
                {:else}
                    <h2>Nu esti in echipa</h2>
                {/if}
            </div>
        </div>
        {#if !wideScreen()}
            <aside>
                <button type="button" class="btn--clear" on:click={openSidebar}>
                    <UseSvg href="#info-icon" size="36" />
                </button>
            </aside>
        {/if}
    </div>

    {#if wideScreen()}
        <TeamPlayers {team} open />
    {:else}
        <TeamPlayers {team} bind:open={sidebarOpen} />
    {/if}
</Loading>

<InfoIcon />

<style>
    .TeamDetails {
        height: calc(100vh - var(--navbar-height));
        display: flex;
    }

    .TeamDetails__content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .TeamDetails__chat {
        height: 100%;
        width: min(100%, 800px);
        position: relative;
    }
</style>
