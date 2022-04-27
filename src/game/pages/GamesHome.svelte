<script>
    import {
        AddGameIcon,
        Btn,
        Floating,
        Overlay,
        Section,
        UseSvg,
    } from '../../common/components';
    import { AddGameForm, GamesList } from '../components';

    let overlayOpened = false;

    const openOverlay = () => {
        overlayOpened = true;
    };
</script>

<Section><h1 class="text-center">Jocuri disponibile</h1></Section>
<GamesList />

<Floating>
    <Btn circle on:click={openOverlay}>
        <UseSvg href="#add-game-icon" size="36" />
    </Btn>
</Floating>

<Overlay bind:open={overlayOpened}>
    <AddGameForm bind:opened={overlayOpened} />
</Overlay>

<AddGameIcon />
