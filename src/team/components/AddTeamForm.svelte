<script>
    import { onDestroy, onMount } from 'svelte';
    import { authStore } from '../../auth/authStore';
    import {
        Btn,
        Form,
        InputField,
        Loading,
        SelectField,
    } from '../../common/components';
    import { resetObj } from '../../common/utils/basicUtils';
    import { gamesStore, getGames$ } from '../../game/gamesStore';
    import { gamesHomeRoute } from '../../routing/routes';
    import { severities, teamsDbService } from '../data';

    export let overlayComponent;

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: gamesLoading, games } = $gamesStore);
    let team = {
        name: '',
        capacity: '',
        game: '',
        description: '',
        severity: 'low',
    };
    let status = {
        isLoading: false,
        error: null,
    };

    const gamesSub = getGames$();

    onMount(() => {
        team = { ...team, uid: loggedUser.id };
    });

    onDestroy(() => {
        gamesSub.unsubscribe();
    });

    const addTeam = async () => {
        try {
            status = { isLoading: true, error: null };

            await teamsDbService.addTeam(team);

            team = resetObj(team, { uid: loggedUser.id, need: 'low' });
            status = { isLoading: false, error: null };
        } catch (error) {
            status = { isLoading: false, error };
        }
    };
</script>

<Loading condition={gamesLoading || status.isLoading}>
    <Form on:submit={addTeam}>
        <h2>Creeaza o echipa</h2>
        <InputField name="name" label="Nume echipa" bind:value={team.name} />
        <InputField
            name="capacity"
            label="Capacitate echipa"
            bind:value={team.capacity}
        />
        <div>
            <SelectField
                name="game"
                label="Joc"
                bind:value={team.game}
                options={games}
                optionValueTransformer={(option) => option.name}
                optionDisplayTransformer={(option) => option.name}
            />
            <span on:click={gamesHomeRoute.goTo}>
                *Daca jocul dorit nu exista poti sa il adaugi
            </span>
        </div>
        <InputField
            name="description"
            label="Descriere"
            bind:value={team.description}
        />
        <SelectField
            name="severity"
            label="Cat de disperat esti?"
            bind:value={team.need}
            options={severities}
            optionValueTransformer={(option) => option.value}
            optionDisplayTransformer={(option) => option.display}
        />
        <Btn>Creeaza echipa</Btn>
        <Btn on:click={overlayComponent.closeOverlay}>Anuleaza</Btn>
        <div>
            {#if status.error}
                {status.error.message}
            {/if}
        </div>
    </Form>
</Loading>
