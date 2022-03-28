<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import { Card, NeedIcon, Players } from '../../common/components';
    import { deleteTeam } from '../teamsStore';

    export let team;

    $: ({ user } = $authStore);

    const handleNavigateToDetails = () => {
        navigate(`/teams/${team.id}`);
    };
</script>

<Card on:click={user ? handleNavigateToDetails : null}>
    <h2>{team.name}</h2>
    <h3>
        Joc: <span>{team.game}</span>
    </h3>
    <div class="icons-wrapper">
        <Players filled={team.playersIds.length} capacity={team.capacity} />
        <NeedIcon need={team.need} />
    </div>
    {#if user?.isAdmin || team.uid === user?.id}
        <button
            class="absolute-top-right btn--clear"
            on:click={() => deleteTeam(team)}
        >
            ❌
        </button>
    {/if}
</Card>

<style>
    .icons-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
