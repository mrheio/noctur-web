<script>
    import { Btn, Floating, Overlay } from '../../common/components';
    import { AddTeamForm, TeamsList } from '../components';
    import { teamsStore } from '../teamsStore';

    $: ({ isLoading } = $teamsStore);

    let overlayComponent;
</script>

<h1 class="text-center">Echipe in cautare de playeri</h1>
<TeamsList />

<Floating>
    <Btn circle on:click={overlayComponent.openOverlay}>
        <i class="team-icon" />
    </Btn>
</Floating>

<Overlay bind:this={overlayComponent}>
    <AddTeamForm {overlayComponent} />
</Overlay>

<style>
    .team-icon {
        --size: 42px;
        display: inline-block;
        width: var(--size);
        height: var(--size);
        background-color: var(--clr-text);
        mask: url('../assets/svg/team.svg') no-repeat center/cover;
        -webkit-mask: url('../assets/svg/team.svg') no-repeat center/cover;
    }
</style>
