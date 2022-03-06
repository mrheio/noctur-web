<script>
    import { Btn, Form, InputField, Loading } from '../../common/components';
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
    <Form on:submit={submit}>
        <InputField name="name" label="Nume joc" bind:value={$data.name} />
        <InputField
            name="maxTeam"
            label="Capacitate maxima echipa"
            bind:value={$data.capacity}
        />
        <Btn>Adauga joc</Btn>
        <Btn type="button" on:click={overlayComponent.closeOverlay}>
            Anuleaza
        </Btn>
        <div>
            {$status.error?.message || ''}
        </div>
    </Form>
</Loading>
