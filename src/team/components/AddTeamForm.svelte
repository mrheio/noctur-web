<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import {
        Btn,
        Form,
        InputField,
        Loading,
        SelectField,
    } from '../../common/components';
    import { createForm } from '../../common/utils';
    import { gamesStore, getGames$ } from '../../game/gamesStore';
    import teamService from '../data/teamService';
    import { needLevels, validateTeamData } from '../data/teamUtils';

    export let overlayComponent;

    $: ({ isLoading: gamesLoading, games } = $gamesStore);

    const gamesSub = getGames$();

    let { data, status, submit } = createForm(
        {
            name: '',
            game: '',
            capacity: '',
            description: '',
            need: 'low',
        },
        teamService.add,
        validateTeamData
    );

    onDestroy(() => {
        gamesSub.unsubscribe();
    });
</script>

<Loading condition={gamesLoading || $status.isLoading}>
    <Form on:submit={submit} error={$status.error}>
        <h2>Creeaza o echipa</h2>
        <InputField name="name" label="Nume echipa" bind:value={$data.name} />
        <div style="width: 100%;">
            <SelectField
                name="game"
                label="Joc"
                bind:value={$data.game}
                options={games}
                optionValueTransformer={(option) => option.name}
                optionDisplayTransformer={(option) => option.name}
            />
            <span on:click={() => navigate('games')}>
                *Daca jocul dorit nu exista poti sa il adaugi
            </span>
        </div>
        <InputField
            name="capacity"
            label="Capacitate echipa"
            bind:value={$data.capacity}
        />
        <InputField
            name="description"
            label="Descriere"
            bind:value={$data.description}
        />
        <SelectField
            name="severity"
            label="Cat de disperat esti?"
            bind:value={$data.need}
            options={needLevels}
            optionValueTransformer={(option) => option.value}
            optionDisplayTransformer={(option) => option.display}
        />
        <Btn>Creeaza echipa</Btn>
        <Btn color="secondary" on:click={overlayComponent.closeOverlay}>
            Anuleaza
        </Btn>
    </Form>
</Loading>
