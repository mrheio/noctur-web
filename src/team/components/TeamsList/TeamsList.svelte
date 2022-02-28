<script>
    import { onDestroy } from 'svelte';
    import { Loading } from '../../../common/components';
    import { getDetailedTeams$, teamsStore } from '../../teamsStore';
    import TeamCard from './TeamCard.svelte';

    $: ({ isLoading, teams } = $teamsStore);

    const sub = getDetailedTeams$();

    onDestroy(() => {
        console.log('destroyed');
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {#each teams as team}
            <TeamCard {team} />
        {/each}
    </div>
</Loading>
