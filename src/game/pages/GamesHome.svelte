<script>
    import { onDestroy } from 'svelte';
    import { Loading } from '../../common/components';
    import { GamesList } from '../components';
    import { gamesDbService } from '../data';
    import { gamesStore, getGames$ } from '../gamesStore';

    $: ({ isLoading, error } = $gamesStore);

    const sub = getGames$();

    onDestroy(() => {
        sub.unsubscribe();
    });

    let game = { name: '', maxTeam: '' };
    let addStatus = {
        isLoading: false,
        error: null,
    };

    const handleAddGame = async () => {
        try {
            addStatus = { ...addStatus, isLoading: true, error: null };

            await gamesDbService.addGame(game);

            game = { name: '', maxTeam: '' };
            addStatus = { ...addStatus, isLoading: false };
        } catch (error) {
            addStatus = { ...addStatus, isLoading: false, error };
        }
    };
</script>

<Loading condition={isLoading || addStatus.isLoading}>
    <div class="header-offset margin-inline--s">
        <h2>Jocuri disponibile</h2>

        <GamesList />
    </div>
</Loading>
