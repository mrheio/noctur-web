<script>
    import {
        Btn,
        Floating,
        Form,
        InputField,
        Loading,
        Overlay,
        PageWrapper,
    } from '../../common/components';
    import { GamesList } from '../components';
    import { gamesDbService } from '../data';

    let overlayComponent;
    let game = { name: '', maxTeam: '' };
    let submitStatus = { loading: false, error: null };

    const addGame = async () => {
        try {
            submitStatus = { loading: true, error: null };

            await gamesDbService.addGame(game);

            game = { name: '', maxTeam: '' };
            submitStatus = { loading: false, error: null };
        } catch (error) {
            submitStatus = { loading: false, error };
        }
    };
</script>

<PageWrapper>
    <h2>Jocuri disponibile</h2>
    <GamesList />
</PageWrapper>

<Floating>
    <Btn circle on:click={overlayComponent.openOverlay}>
        <i class="icon" />
    </Btn>
</Floating>

<Overlay bind:this={overlayComponent}>
    <Loading condition={submitStatus.loading}>
        <Form on:submit={addGame}>
            <InputField name="name" label="Nume joc" bind:value={game.name} />
            <InputField
                name="maxTeam"
                label="Capacitate maxima echipa"
                bind:value={game.maxTeam}
            />
            <Btn>Adauga joc</Btn>
            <Btn type="button" on:click={overlayComponent.closeOverlay}>
                Anuleaza
            </Btn>
            <div>
                {submitStatus.error?.message || ''}
            </div>
        </Form>
    </Loading>
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
