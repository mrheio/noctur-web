<script>
    import { Btn, Floating, Overlay } from '../../common/components';
    import { AddGameForm, GamesList } from '../components';

    let overlayComponent;
</script>

<h1 class="text-align-center">Jocuri disponibile</h1>
<GamesList />

<Floating>
    <Btn circle on:click={overlayComponent.openOverlay}>
        <i class="add-game-icon" />
    </Btn>
</Floating>

<Overlay bind:this={overlayComponent}>
    <AddGameForm {overlayComponent} />
</Overlay>

<style>
    .add-game-icon {
        --size: 42px;
        display: inline-block;
        width: var(--size);
        height: var(--size);
        background-color: var(--clr-tertiary-30);
        mask: url('../assets/svg/add_game.svg') no-repeat center/cover;
        -webkit-mask: url('../assets/svg/add_game.svg') no-repeat center/cover;
    }
</style>
