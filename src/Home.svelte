<script>
    import { Fullpage, FullpageSection } from 'svelte-fullpage';
    import { navigate } from 'svelte-routing';
    import { authStore } from './auth/authStore';
    import { Btn } from './common/components';
    import { TeamsList } from './team/components';

    $: ({ user } = $authStore);
</script>

<Fullpage>
    <FullpageSection>
        <div class="Home gray-overlay fullscreen centered">
            <div class="Home__wrapper">
                <h1>Iechipele</h1>
                <h3>Gaseste playeri, rapid si simplu</h3>

                <div class="Home__wrapper__text">
                    <p>
                        Esti intr-o cautare disperata de oameni? Nu ai cu cine
                        sa te joci? Prietenii te-au abandonat?
                    </p>
                    <p>
                        Aici si acum poti sa te alaturi unor oameni alaturi de
                        care sa iti dai in cap.
                    </p>
                </div>

                {#if !user}
                    <div>
                        <Btn on:click={() => navigate('login')}>
                            Intra in cont
                        </Btn>
                        <Btn on:click={() => navigate('register')}>
                            Creeaza cont
                        </Btn>
                    </div>
                {/if}
            </div>
        </div>
    </FullpageSection>

    <FullpageSection>
        <div class="header-offset margin-inline--s">
            <h1>Echipe in cautare de playeri</h1>
            <TeamsList />
        </div>
    </FullpageSection>
</Fullpage>

<style>
    .Home {
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
    }

    .Home__wrapper {
        max-width: var(--breakpoint-s);
        margin: 0 auto;
        text-align: center;
    }

    .Home__wrapper__text {
        margin-bottom: var(--spacing-l);
    }
</style>
