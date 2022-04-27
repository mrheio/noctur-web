<script>
    import { EmptyPlayerIcon,FilledPlayerIcon,UseSvg } from './svg';

    export let filled = 0;
    export let capacity = 0;
</script>

<span class="Players">
    {#each new Array(filled) as _}
        <UseSvg href='#filled-player-icon' />
    {/each}
    {#each new Array(capacity - filled) as _}
    <UseSvg href='#empty-player-icon' />
    {/each}
</span>

<FilledPlayerIcon />
<EmptyPlayerIcon />

<style>
    .Players {
        display: flex;
        gap: var(--gap-s);
    }
</style>
