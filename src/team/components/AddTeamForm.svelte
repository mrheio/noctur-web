<script>
    import { onDestroy, onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authStore } from '../../auth/authStore';
    import {
        Btn,
        Form,
        InputField,
        Loading,
        SelectField,
    } from '../../common/components';
    import { gamesStore, getGames$ } from '../../game/gamesStore';
    import { severities, teamsDbService } from '../data';

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: gamesLoading, games } = $gamesStore);

    const gamesSub = getGames$();

    let team = {
        name: '',
        neededPlayers: '',
        gameName: '',
        description: '',
        severity: 'low',
    };
    let addStatus = {
        isLoading: false,
        error: null,
    };

    onMount(() => {
        team = { ...team, userId: loggedUser.id };
    });

    onDestroy(() => {
        gamesSub.unsubscribe();
    });

    const handleAddTeam = async () => {
        try {
            addStatus = { ...addStatus, isLoading: true, error: null };

            await teamsDbService.addTeam(team);

            team = {
                ...team,
                name: '',
                neededPlayers: '',
                gameName: '',
                description: '',
                severity: 'low',
            };
            addStatus = { ...addStatus, isLoading: false };
        } catch (error) {
            addStatus = { ...addStatus, isLoading: false, error };
        }
    };

    const handleNavigateToGames = () => {
        navigate('games');
    };
</script>

<Loading condition={gamesLoading || addStatus.isLoading}>
    <div
        class="bg-secondary-800 bg-opacity-30 pt-8 pb-16 px-2 shadow-sm max-w-lg mx-auto mb-8"
    >
        <Form on:submit={handleAddTeam}>
            <h2 class="font-bold mb-4">Creeaza o echipa</h2>
            <InputField
                name="name"
                label="Nume echipa"
                bind:value={team.name}
            />
            <InputField
                name="neededPlayers"
                label="Capacitate echipa"
                bind:value={team.neededPlayers}
            />
            <div>
                <SelectField
                    name="gameName"
                    label="Joc"
                    bind:value={team.gameName}
                    options={games}
                    optionValueTransformer={(option) => option.name}
                    optionDisplayTransformer={(option) => option.name}
                />
                <span class="cursor-pointer" on:click={handleNavigateToGames}>
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
                bind:value={team.severity}
                options={severities}
                optionValueTransformer={(option) => option.value}
                optionDisplayTransformer={(option) => option.display}
            />
            <Btn>Creeaza echipa</Btn>
            <div class="h-6">
                {#if addStatus.error}
                    {addStatus.error.message}
                {/if}
            </div>
        </Form>
    </div>
</Loading>
