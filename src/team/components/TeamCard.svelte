<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import { Card, Players } from '../../common/components';
    import { deleteTeam } from '../teamsStore';

    export let team;

    let id, name, game, playersIds, capacity, uid;

    $: ({ user } = $authStore);

    $: ({ id, name, game, playersIds, capacity, uid } = team);

    const handleNavigateToDetails = () => {
        navigate(`/teams/${id}`);
    };
</script>

<Card
    size="fill"
    outlined="primary"
    clickable
    on:click={user ? handleNavigateToDetails : null}
>
    <h2>{name}</h2>
    <h3>
        Joc: <span>{game}</span>
    </h3>
    <div class="container container--fill container--centered">
        <Players filled={playersIds.length} {capacity} />
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
