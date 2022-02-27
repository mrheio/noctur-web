<script>
    import { onDestroy } from 'svelte';
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import gamesDbService from '../gamesDbService';
    import { gamesStore, getGames$ } from '../gamesStore';
    import GamesList from './GamesList.svelte';

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
    <div class="text-center mb-8">
        <Form on:submit={handleAddGame}>
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
