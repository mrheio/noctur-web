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
    import { validateTeamData } from '../data/teamUtils';

    export let opened;

    $: ({ isLoading: gamesLoading, games } = $gamesStore);

    const gamesSub = getGames$();

    const addTeam = async (team) => {
        await teamService.add(team);
        opened = false;
    };

    let { data, status, submit } = createForm(
        {
            name: '',
            game: '',
            capacity: '',
            description: '',
        },
        addTeam,
        validateTeamData
    );

    onDestroy(() => {
        gamesSub.unsubscribe();
    });
</script>

<Loading condition={gamesLoading || $status.isLoading}>
    <Form on:submit={submit} error={$status.error} centered>
        <h1 class="text-center">Creeaza echipa</h1>
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
            <span class="link" on:click={() => navigate('games')}>
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
        <Btn>Creeaza echipa</Btn>
    </Form>
</Loading>
