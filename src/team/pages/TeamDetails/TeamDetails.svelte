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
</script>

<Loading condition={isLoading}>
    <div class="TeamDetails">
        <div class="TeamDetails__content">
            <h1 class="header-m">{team.name}</h1>
            {#if team}
                {#if isInTeam(team)}
                    <TeamChat teamId={id} />
                {:else}
                    <h3>Nu esti in echipa</h3>
                {/if}
            {/if}
        </div>
        <aside class="TeamDetails__menu">
            <button class="btn--clear" on:click={() => (sidebarOpen = true)}>
                <UseSvg href="#info-icon" size="36" />
            </button>
        </aside>
    </div>

    <TeamPlayers {team} bind:open={sidebarOpen} />
</Loading>
<InfoIcon />

<style>
    .TeamDetails {
        height: calc(100vh - var(--navbar-height));
        display: flex;
        width: min(800px, 100%);
        margin-inline: auto;
    }

    .TeamDetails__content {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>
