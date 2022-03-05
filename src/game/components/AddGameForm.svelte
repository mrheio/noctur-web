<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { resetObj } from '../../common/utils/basicUtils';
    import { gamesDbService, validateGameData } from '../data';

    export let overlayComponent;

    let game = { name: '', capacity: '' };
    let status = { isLoading: false, error: null };

    const addGame = async () => {
        try {
            validateGameData(game);

            status = { isLoading: true, error: null };

            await gamesDbService.addGame(game);

            game = resetObj(game);
            status = { isLoading: false, error: null };
        } catch (error) {
            status = { isLoading: false, error };
        }
    };
</script>

<Loading condition={status.isLoading}>
    <Form on:submit={addGame}>
        <InputField name="name" label="Nume joc" bind:value={game.name} />
        <InputField
            name="maxTeam"
            label="Capacitate maxima echipa"
            bind:value={game.capacity}
        />
        <Btn>Adauga joc</Btn>
        <Btn type="button" on:click={overlayComponent.closeOverlay}>
            Anuleaza
        </Btn>
        <div>
            {status.error?.message || ''}
        </div>
    </Form>
</Loading>
