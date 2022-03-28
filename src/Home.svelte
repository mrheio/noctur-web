<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from './auth/authStore';
    import { Btn } from './common/components';

    $: ({ user, isLoading } = $authStore);
</script>

<div class="Home fullscreen fullscreen--faded flex-centered text-align-center">
    <div class="Home__content-wrapper padding-inline-s">
        <h1>Iechipele</h1>
        <h3>Gaseste playeri rapid si simplu</h3>

        {#if !user}
            <div class="Home__buttons">
                <Btn on:click={() => navigate('login')} color="secondary">
                    Intra in cont
                </Btn>
                <Btn on:click={() => navigate('register')}>Creeaza cont</Btn>
            </div>
        {/if}
    </div>
</div>

<style>
    .Home {
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
    }

    .Home__content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--gap-xl);
        width: 100%;
        max-width: 480px;
    }

    @media (max-width: 340px) {
        .Home__buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--gap-l);
        }
    }
</style>
