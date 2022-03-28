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

    let { data, status, submit } = createForm(
        { name: '', capacity: '' },
        gameService.add,
        validateGameData
    );
</script>

<Loading condition={$status.isLoading}>
    <Form on:submit={submit} error={$status.error}>
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
