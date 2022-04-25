<script>
    import { Sidebar } from '../../../common/components';
    import PlayersList from './PlayersList.svelte';

    export let team;
    export let open = false;
</script>

<Sidebar bind:open>
    <h2>Joc: {team.game}</h2>
    <h2>Players:</h2>
    <PlayersList {team} />
</Sidebar>
