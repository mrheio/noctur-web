<script>
    import { authStore } from '../../auth/authStore';
    import { AddTeamForm, TeamsList } from '../components';
    import { teamsStore } from '../teamsStore';

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: teamsLoading } = $teamsStore);
</script>

{#if loggedUser}
    <AddTeamForm />
{/if}

<TeamsList />
