<script>
    import {
        Btn,
        Floating,
        Overlay,
        PageWrapper,
    } from '../../common/components';
    import { AddTeamForm, TeamsList } from '../components';

    let overlayComponent;
</script>

<PageWrapper>
    <h2>Echipe in cautare de playeri</h2>
    <TeamsList />
</PageWrapper>

<Floating>
    <Btn circle on:click={overlayComponent.openOverlay}>
        <i class="icon" />
    </Btn>
</Floating>

<Overlay bind:this={overlayComponent}>
    <AddTeamForm {overlayComponent} />
</Overlay>

<style>
    .icon {
        -webkit-mask: url('../assets/svg/team.svg') no-repeat center/cover;
        mask: url('../assets/svg/team.svg') no-repeat center/cover;
        display: inline-block;
        width: 32px;
        height: 32px;
        background: var(--clr-primary-100);
    }
</style>
