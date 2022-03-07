<script>
    import { Btn, Floating, Overlay } from '../../common/components';
    import { AddGameForm, GamesList } from '../components';

    let overlayComponent;
</script>

<h2>Jocuri disponibile</h2>
<GamesList />

<Floating>
    <Btn circle on:click={overlayComponent.openOverlay}>
        <i class="icon" />
    </Btn>
</Floating>

<Overlay bind:this={overlayComponent}>
    <AddGameForm {overlayComponent} />
</Overlay>

<style>
    .icon {
        -webkit-mask: url('../assets/svg/add_game.svg') no-repeat center/cover;
        mask: url('../assets/svg/add_game.svg') no-repeat center/cover;
        display: inline-block;
        width: 32px;
        height: 32px;
        background: var(--clr-primary-100);
    }
</style>
