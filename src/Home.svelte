<script>
    import { navigate } from 'svelte-routing';
    import { authStore } from './auth/authStore';
    import { Btn } from './common/components';

    $: ({ user, isLoading } = $authStore);
</script>

<div class="fullscreen centered Home">
    <div class="Home__content-wrapper">
        <h1>Iechipele</h1>
        <h3>Gaseste playeri rapid si simplu</h3>

        <div class="">
            <p>
                Esti intr-o cautare disperata de oameni? Nu ai cu cine sa te
                joci? Prietenii te-au abandonat?
            </p>
            <p>
                Aici si acum poti sa te alaturi unor oameni alaturi de care sa
                iti dai in cap.
            </p>
        </div>

        {#if !user}
            <div class="Home__buttons">
                <Btn on:click={() => navigate('login')}>Intra in cont</Btn>
                <Btn on:click={() => navigate('register')}>Creeaza cont</Btn>
            </div>
        {/if}
    </div>
</div>

<style>
    .Home {
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
        position: relative;
        margin-top: calc(var(--header-height) * -1);
        margin-inline: calc(var(--spacing-s) * -1);
    }

    .Home::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: var(--z-index-over-1);
    }

    .Home__content-wrapper {
        position: relative;
        z-index: var(--z-index-over-2);
        text-align: center;
        padding-inline: var(--spacing-s);
    }

    .Home__buttons {
        display: flex;
        justify-content: center;
        gap: var(--spacing-s);
    }
</style>
