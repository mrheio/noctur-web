<script>
    import { onDestroy } from 'svelte';
    import { InputField } from '../../../common/components';
    import messagesService from '../../data/messagesService';

    export let teamId;

    let message = '';
    let messages = [];

    const scrollIntoView = (ev) => {
        console.log(ev);
        const el = document.querySelector('#bottom');
        console.log(el);
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
    <InputField
        placeholder="Mesaj"
        name="message"
        bind:value={message}
        on:keypress={sendOnEnter}
    />
</div>

<style>
    .TeamChat {
        flex: 1 1 auto;
        min-height: 0;
    }

    .TeamChat__messages {
        height: 90%;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        word-break: break-all;
    }

    .TeamChat__username {
        font-size: 1.2rem;
        margin-right: var(--spacing-xs);
        font-weight: var(--fw-semibold);
    }

    .TeamChat__message {
        color: var(--clr-text-faded);
    }
</style>
