<script>
    import { onDestroy } from 'svelte';
    import { Grid, Loading } from '../../common/components';
    import { getDetailedTeams$, teamsStore } from '../teamsStore';
    import TeamCard from './TeamCard.svelte';

    $: ({ isLoading, teams } = $teamsStore);

    const sub = getDetailedTeams$();

    onDestroy(() => {
        console.log('destroyed');
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <Grid>
        {#each teams as team}
            <TeamCard {team} />
        {/each}
    </Grid>
</Loading>

<style>
</style>
