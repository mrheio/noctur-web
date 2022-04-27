<script>
    import { onDestroy } from 'svelte';
    import { Grid, Loading } from '../../common/components';
    import { gamesStore, getGames$ } from '../gamesStore';
    import GameCard from './GameCard.svelte';

    $: ({ isLoading, games } = $gamesStore);

    const sub = getGames$();

    onDestroy(() => {
        sub.unsubscribe();
    });
</script>

<Loading condition={isLoading}>
    <div class="container container--fill">
        <Grid>
            {#each games as game}
                <GameCard {game} />
            {/each}
        </Grid>
    </div>
</Loading>
