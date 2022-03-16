<script>
    import { onDestroy } from 'svelte';
    import { Grid } from '../../common/components';
    import teamService from '../data/teamService';
    import TeamCard from './TeamCard.svelte';

    let teams = [];

    const sub = teamService.getAll$().subscribe((t) => {
        console.log(t);
        teams = t;
    });

    onDestroy(() => {
        sub.unsubscribe();
    });
</script>

<Grid>
    {#each teams as team}
        <TeamCard {team} />
    {/each}
</Grid>

<style>
</style>
