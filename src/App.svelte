<script>
    import { Router } from 'svelte-routing';
    import { authStore, getLoggedUser$ } from './auth/authStore';
    import { Loading } from './common/components';
    import Header from './Header.svelte';
    import Main from './Main.svelte';

    $: ({ isLoading } = $authStore);

    getLoggedUser$();
</script>

<Router>
    <Loading condition={isLoading}>
        <Header />
        <Main />
    </Loading>
</Router>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root {
        --clr-primary-main: #fff;
        --clr-primary-alt-dark: #000;
        --clr-secondary-main: #151328;
        --clr-secondary-alt-light: #5a53ac;
        --clr-secondary-alt-lighter: #7771bd;
        --clr-secondary-alt-lightest: #a6a3d2;
        --clr-accent-main: #d5f19c;
        --clr-accent-alt-light: #ddf4b0;
        --clr-accent-alt-dark: #aac17d;
    }

    body,
    html {
        @apply m-0 p-0 bg-secondary-main text-primary-main;
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        @apply text-5xl;
    }

    h2 {
        @apply text-4xl;
    }

    h3 {
        @apply text-3xl;
    }

    h4 {
        @apply text-2xl;
    }

    h5 {
        @apply text-xl;
    }

    h6 {
        @apply text-lg;
    }

    a,
    a:visited,
    .link {
        @apply text-primary-main no-underline border-none text-xl font-bold hover:text-accent-main hover:no-underline transition-all duration-300 ease-in-out;
    }

    .active {
        @apply !text-accent-main;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus,
    input:-internal-autofill-selected {
        -webkit-text-fill-color: #fff;
        background: #151328 !important;
        box-shadow: inset 0 0 0 1px #151328, inset 0 0 0 100px #151328;
    }
</style>
