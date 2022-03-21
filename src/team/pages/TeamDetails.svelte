<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import {
        Btn,
        InputField,
        Loading,
        PlayersDisplay,
    } from '../../common/components';
    import messagesService from '../data/messagesService';
    import teamService from '../data/teamService';
    import { isInTeam, isTeamFull, isTeamOwner } from '../data/teamUtils';

    export let id;

    let team = null;
    let isLoading = true;
    let chatSub = null;
    let messages = [];
    let message = '';

    const teamSub = teamService.getDetailedTeamById$(id).subscribe({
        next: (t) => {
            team = t;
            isLoading = false;
        },
        error: (error) => {
            navigate('/teams', { replace: true });
        },
    });

    $: {
        if (team && isInTeam(team)) {
            chatSub = messagesService(id)
                .getAll$()
                .subscribe((ms) => {
                    console.log(ms);
                    messages = ms;
                });
        } else {
            if (chatSub) {
                chatSub.unsubscribe();
                chatSub = null;
            }
        }
    }

    onDestroy(() => {
        if (chatSub) {
            chatSub.unsubscribe();
        }
        teamSub.unsubscribe();
    });

    const deleteTeam = async () => {
        isLoading = true;
        await teamService.deleteById(team.id);
    };

    const joinTeam = async () => {
        isLoading = true;
        await teamService.addLoggedUserToTeam(team);
    };

    const quitTeam = async () => {
        isLoading = true;
        await teamService.removeLoggedUserFromTeam(team);
    };

    const sendMessage = async () => {
        if (message.length) {
            await messagesService(id).add({ message });
            message = '';
        }
    };

    const sendOnEnter = async (event) => {
        console.log(event);
        if (event.charCode === 13) {
            await sendMessage();
        }
    };
</script>

<Loading condition={isLoading}>
    <h1>{team.name}</h1>
    <h2>Joc: {team.game}</h2>
    <PlayersDisplay filled={team.playersIds.length} capacity={team.capacity} />
    <p class="description">{team.description}</p>
    <h3 class="players">Players:</h3>
    <div class="player-card-container">
        {#each team.users as user}
            <div class="player-card bold">{user.username}</div>
        {/each}
    </div>
    {#if isTeamOwner(team)}
        <Btn on:click={deleteTeam}>Sterge echipa</Btn>
    {/if}
    {#if !isTeamOwner(team) && !isInTeam(team) && !isTeamFull(team)}
        <Btn on:click={joinTeam}>Intra in echipa</Btn>
    {/if}
    {#if !isTeamOwner(team) && isInTeam(team)}
        <Btn on:click={quitTeam}>Iesi din echipa</Btn>
    {/if}
    {#if chatSub}
        <div class="chat">
            <div>
                {#each messages as m}
                    <div class="chat__message">
                        <i class="username">{m.user.username}</i>
                        {m.message}
                    </div>
                {/each}
            </div>
            <div class="chat__form">
                <InputField
                    placeholder="Mesaj"
                    name="message"
                    bind:value={message}
                    on:keypress={sendOnEnter}
                />
                <Btn on:click={sendMessage}>Trimite</Btn>
            </div>
        </div>
    {/if}
</Loading>

<style>
    .players {
        margin-bottom: var(--spacing-s);
    }

    .player-card-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--spacing-s);
    }

    .player-card {
        background: var(--clr-primary-90);
        padding: var(--spacing-m);
        max-width: 300px;
        border-radius: 4px;
        text-align: center;
    }

    .description {
        word-break: break-all;
    }

    .username {
        font-weight: var(--fw-semibold);
    }

    .chat {
        margin-top: var(--spacing-s);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .chat > * {
        min-width: 0;
        width: 100%;
        max-width: 576px;
    }

    .chat__message {
        display: flex;
        gap: 14px;
    }

    .chat__form {
        display: flex;
        gap: 6px;
    }
</style>
