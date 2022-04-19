<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
    import { createForm } from '../../common/utils';
    import gameService from '../data/gameService';
    import { validateGameData } from '../data/gameUtils';

    export let opened;

    const addGame = async (game) => {
        await gameService.add(game);
        opened = false;
    };

    let { data, status, submit } = createForm(
        { name: '', capacity: '' },
        addGame,
        validateGameData
    );
</script>

<Loading condition={$status.isLoading}>
    <Form on:submit={submit} error={$status.error} centered>
        <h1 class="text-center">Adauga joc</h1>
        <InputField name="name" label="Nume joc" bind:value={$data.name} />
        <InputField
            name="maxTeam"
            label="Capacitate maxima echipa"
            bind:value={$data.capacity}
        />
        <Btn>Adauga joc</Btn>
    </Form>
</Loading>
