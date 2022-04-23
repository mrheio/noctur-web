<script>
    import { onDestroy } from 'svelte';
    import { InputField } from '../../../common/components';
    import messagesService from '../../data/messagesService';

    export let teamId;

    let message = '';
    let messages = [];

    const scrollIntoView = (ev) => {
        const el = document.querySelector('#bottom');
        if (!el) {
            return;
        }
        el.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
        });
    };

    const sub = messagesService(teamId)
        .getAll$()
        .subscribe((ms) => {
            messages = ms;
            scrollIntoView();
        });

    onDestroy(() => {
        sub.unsubscribe();
    });

    const sendMessage = async () => {
        if (message.length) {
            await messagesService(teamId).add({ message });
            message = '';
        }
    };

    const sendOnEnter = async (event) => {
        if (event.charCode === 13) {
            await sendMessage();
        }
    };
</script>

<div class="TeamChat">
    <div class="TeamChat__messages">
        {#each messages as m}
            <div>
                <span class="TeamChat__username">
                    {m.user.username}
                </span>
                <span class="TeamChat__message">{m.message}</span>
            </div>
        {/each}
        <div id="bottom" />
    </div>
    <div class="TeamChat__input">
        <InputField
            placeholder="Mesaj"
            name="message"
            bind:value={message}
            on:keypress={sendOnEnter}
        />
    </div>
</div>

<style>
    .TeamChat {
        padding-bottom: var(--spacing-s);
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .TeamChat__messages {
        overflow-y: auto;
        white-space: pre-wrap;
        word-break: keep-all;
        overflow-wrap: break-word;
    }

    .TeamChat__username {
        font-weight: var(--fw-semibold);
        font-size: 1.1rem;
    }

    .TeamChat__message {
        color: var(--clr-text-faded);
    }

    .TeamChat__input {
        flex: 1;
    }
</style>
