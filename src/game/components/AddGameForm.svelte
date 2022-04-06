<script>
    import {
        Btn,
        FlexColumn,
        Form,
        InputField,
        Loading,
    } from '../../common/components';
    import { createForm } from '../../common/utils';
    import gameService from '../data/gameService';
    import { validateGameData } from '../data/gameUtils';

    export let overlayComponent;

    const addGame = async (game) => {
        await gameService.add(game);
        overlayComponent.closeOverlay();
    };

    let { data, status, submit } = createForm(
        { name: '', capacity: '' },
        addGame,
        validateGameData
    );
</script>

<Loading condition={$status.isLoading}>
    <Form on:submit={submit} error={$status.error}>
        <h1 class="text-center">Adauga joc</h1>
        <InputField name="name" label="Nume joc" bind:value={$data.name} />
        <InputField
            name="maxTeam"
            label="Capacitate maxima echipa"
            bind:value={$data.capacity}
        />
        <FlexColumn centered>
            <Btn>Adauga joc</Btn>
            <Btn
                type="button"
                color="secondary"
                on:click={overlayComponent.closeOverlay}
            >
                Anuleaza
            </Btn>
        </FlexColumn>
    </Form>
</Loading>
