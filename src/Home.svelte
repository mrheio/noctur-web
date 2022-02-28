<script>
    import { Link } from 'svelte-routing';
    import { authStore } from './auth/authStore';
    import { TeamsList } from './team/components';

    $: ({ loggedUser } = $authStore);
</script>

<div class="h-[50vh] text-center px-8 bg flex flex-col justify-center mb-4">
    <h1 class="font-bold mb-2">Iechipele</h1>
    <h3 class="mb-8 font-semibold">Gasesti playeri, rapid, acum</h3>

    <h5 class="mb-2 font-semibold">
        Ai nevoie de o echipa? Nu ai cu cine sa te joci?
    </h5>

    <p class="text-lg font-semibold">
        DOAR ACUM, timp de o perioada limitata care nu se termina, poti sa iti
        gasesti tovarasi de incredere alaturi de care sa te enervezi.
    </p>

    {#if !loggedUser}
        <Link class="text-xl font-bold" to="login">Intra in cont</Link>
        <Link class="text-xl font-bold" to="register">Creeaza cont</Link>
    {/if}
</div>
<TeamsList />

<style>
    .bg {
        position: relative;
        background: url('../assets/imgs/gaming_bg_3.jpg') no-repeat center/cover;
        animation: myfirst 5s;
        border: 0;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
        -ms-interpolation-mode: bicubic;
    }
    .bg::after {
        content: '';
        @apply absolute top-0 left-0 h-full w-full z-10;
        background: radial-gradient(circle, transparent 0%, #151328 80%);
        pointer-events: none;
    }
    .bg * {
        @apply relative z-20;
    }

    @keyframes myfirst {
        from {
            opacity: 0.2;
        }
        to {
            opacity: 1;
        }
    }
</style>
