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
    import { gamesStore, getGames$ } from '../../game/gamesStore';
    import teamsDbService from '../teamsDbService';
    import { getDetailedTeams$, teamsStore } from '../teamsStore';
    import { severities } from '../teamUtils';
    import TeamCard from './TeamCard.svelte';

    $: ({ loggedUser } = $authStore);
    $: ({ isLoading: gamesLoading, games } = $gamesStore);
    $: ({ isLoading: teamsLoading, error, teams } = $teamsStore);

    const teamsSub = getDetailedTeams$();
    const gamesSub = getGames$();

    onDestroy(() => {
        teamsSub.unsubscribe();
        gamesSub.unsubscribe();
    });

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
</script>

<Loading condition={teamsLoading}>
    <Loading condition={gamesLoading || addStatus.isLoading}>
        <div class="text-center mb-4">
            <Form on:submit={handleAddTeam}>
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
                    <span>*Daca jocul dorit nu exista poti sa il adaugi</span>
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
                <Btn>Adauga joc</Btn>
                <div class="h-4">
                    {#if addStatus.error}
                        {addStatus.error.message}
                    {/if}
                </div>
            </Form>
        </div>
    </Loading>

    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {#each teams as team}
            <TeamCard {team} />
        {/each}
    </div>
</Loading>
