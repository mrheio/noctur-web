<script>
    import { onDestroy } from 'svelte';
    import { Btn, Form, InputField, Loading } from '../../common/components';
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
    <div
        class="bg-secondary-800 bg-opacity-30 pt-8 pb-16 px-2 shadow-sm max-w-lg mx-auto mb-8"
    >
        <Form on:submit={handleAddGame}>
            <h2 class="font-bold mb-4">Adauga un joc</h2>
            <InputField name="name" label="Nume joc" bind:value={game.name} />
            <InputField
                name="maxTeam"
                label="Capacitate maxima echipa"
                bind:value={game.maxTeam}
            />
            <Btn>Adauga joc</Btn>
            <div class="h-4">
                {#if addStatus.error}
                    {addStatus.error.message}
                {/if}
            </div>
        </Form>
    </div>
    <GamesList />
</Loading>
