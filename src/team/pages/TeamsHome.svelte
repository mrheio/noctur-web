<script>
    import { authStore } from '../../auth/authStore';
    import { Loading } from '../../common/components';
    import { AddTeamForm, TeamsList } from '../components';
    import { teamsStore } from '../teamsStore';

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: teamsLoading } = $teamsStore);
</script>

<Loading condition={teamsLoading}>
    {#if loggedUser}
        <AddTeamForm />
    {/if}

    <TeamsList />
</Loading>
