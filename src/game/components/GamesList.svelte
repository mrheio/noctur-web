<script>
    import { onDestroy } from 'svelte';
    import { Grid, Loading } from '../../common/components';
    import { gamesStore, getGames$ } from '../gamesStore';
    import GameCard from './GameCard.svelte';

    $: ({ isLoading, games } = $gamesStore);

    const sub = getGames$();

    onDestroy(() => {
        console.log('games list destroyed');
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <Grid>
        {#each games as game}
            <GameCard {game} />
        {/each}
    </Grid>
</Loading>
