<script>
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { Btn, InputField, Loading } from '../../common/components';
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
        if (event.charCode === 13) {
            await sendMessage();
        }
    };
</script>

<Loading condition={isLoading}>
    <h1>{team.name}</h1>
    <h2>Joc: {team.game}</h2>
    <p class="TeamDetails__description">{team.description}</p>
    <div class="TeamDetails__players">
        <h3>Players:</h3>
        <ul class="TeamDetails__players-list text-align-center">
            {#each team.users as user}
                <li class="TeamDetails__players-list__player">
                    {user.username}
                </li>
            {/each}
        </ul>
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
        <div class="TeamDetails__chat">
            <div>
                {#each messages as m}
                    <div>
                        <span class="TeamDetails__chat__username">
                            {m.user.username}
                        </span>
                        <span>{m.message}</span>
                    </div>
                {/each}
            </div>
            <div class="TeamDetails__input-wrapper">
                <InputField
                    placeholder="Mesaj"
                    name="message"
                    bind:value={message}
                    on:keypress={sendOnEnter}
                />
            </div>
        </div>
    {/if}
</Loading>

<style>
    .TeamDetails__description {
        max-width: min(100%, 768px);
    }

    .TeamDetails__players {
        margin-top: var(--spacing-m);
    }

    .TeamDetails__players-list {
        padding: 0;
    }

    .TeamDetails__players-list__player {
        background-color: var(--clr-primary-80);
        padding: var(--spacing-s) var(--spacing-m);
        width: 100%;
        border-radius: var(--rounded-s);
        margin-bottom: var(--spacing-xs);
    }

    .TeamDetails__chat {
        margin-top: var(--spacing-xxl);
        max-width: 100%;
    }

    .TeamDetails__chat > * + * {
        margin-top: var(--spacing-s);
    }

    .TeamDetails__chat__username {
        font-weight: var(--fw-semibold);
        color: var(--clr-tertiary-20);
        margin-inline-end: var(--spacing-xxs);
    }

    @media (min-width: 768px) {
        .TeamDetails__players-list__player {
            width: 480px;
        }

        .TeamDetails__chat {
            max-width: 480px;
        }
    }
</style>
