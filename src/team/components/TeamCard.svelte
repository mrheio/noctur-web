<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import { Card, NeedIcon, Players } from '../../common/components';
    import { deleteTeam } from '../teamsStore';

    export let team;

    $: ({ user } = $authStore);

    const { id, name, game, playersIds, capacity, need, uid } = team;

    const handleNavigateToDetails = () => {
        navigate(`/teams/${id}`);
    };
</script>

<Card on:click={user ? handleNavigateToDetails : null}>
    <h2>{name}</h2>
    <h3>
        Joc: <span>{game}</span>
    </h3>
    <div class="icons-wrapper">
        <Players filled={playersIds.length} {capacity} />
        <NeedIcon {need} />
    </div>
    {#if user?.isAdmin || uid === user?.id}
        <button
            class="card-top-right btn--clear"
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
