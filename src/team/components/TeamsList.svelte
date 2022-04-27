<script>
    import { onDestroy } from 'svelte';
    import { Grid, Loading } from '../../common/components';
    import { getTeams$, teamsStore } from '../teamsStore';
    import TeamCard from './TeamCard.svelte';

    $: ({ teams, isLoading } = $teamsStore);

    const sub = getTeams$();

    onDestroy(() => {
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <div class="container container--fill">
        <Grid>
            {#each teams as team}
                <TeamCard {team} />
            {/each}
        </Grid>
    </div>
</Loading>
