<script>
    import {
        AddTeamIcon,
        Btn,
        Floating,
        Overlay,
        Section,
        UseSvg,
    } from '../../common/components';
    import { AddTeamForm, TeamsList } from '../components';

    let overlayOpened = false;

    const openOverlay = () => {
        overlayOpened = true;
    };
</script>

<Section><h1 class="text-center">Echipe in cautare de playeri</h1></Section>
<TeamsList />

<Floating>
    <Btn circle on:click={openOverlay}>
        <UseSvg href="#add-team-icon" size="36" />
    </Btn>
</Floating>

<Overlay bind:open={overlayOpened}>
    <AddTeamForm bind:opened={overlayOpened} />
</Overlay>

<AddTeamIcon />
