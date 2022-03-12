<script>
    import { Router } from 'svelte-routing';
    import { authStore, getLoggedUser$ } from './auth/authStore';
    import { Loading } from './common/components';
    import Layout from './Layout.svelte';

    $: ({ isLoading } = $authStore);

    getLoggedUser$();
</script>

<Router>
    <Loading condition={isLoading}>
        <Layout />
    </Loading>
</Router>

<style global>
    :root {
        --clr-primary-0: #eee6fe;
        --clr-primary-10: #ccb3fd;
        --clr-primary-20: #ab80fb;
        --clr-primary-30: #894df9;
        --clr-primary-40: #671af8;
        --clr-primary-50: #5600f7;
        --clr-primary-60: #4500c6;
        --clr-primary-70: #340094;
        --clr-primary-80: #220063;
        --clr-primary-90: #110031;
        --clr-primary-100: #070013;

        --clr-secondary-0: #f5e6f9;
        --clr-secondary-10: #e2b4ee;
        --clr-secondary-20: #cf82e2;
        --clr-secondary-30: #bc50d6;
        --clr-secondary-40: #b237d1;
        --clr-secondary-50: #9f05c5;
        --clr-secondary-60: #8f05b1;
        --clr-secondary-70: #6f048a;
        --clr-secondary-80: #500363;
        --clr-secondary-90: #30013b;
        --clr-secondary-100: #200127;

        --clr-tertiary-0: #e9fbfa;
        --clr-tertiary-10: #bdf2f0;
        --clr-tertiary-20: #91eae7;
        --clr-tertiary-30: #64e1dd;
        --clr-tertiary-40: #38d8d3;
        --clr-tertiary-50: #22d4ce;
        --clr-tertiary-60: #1baaa5;
        --clr-tertiary-70: #147f7c;
        --clr-tertiary-80: #0e5552;
        --clr-tertiary-90: #072a29;
        --clr-tertiary-100: #031515;

        --clr-txt: #fff;
        --clr-txt-gray: #e0e0e0;

        --spacing: 1rem;
        --spacing-xs: calc(0.35 * var(--spacing));
        --spacing-s: calc(0.75 * var(--spacing));
        --spacing-m: calc(1.5 * var(--spacing));
        --spacing-l: calc(2.5 * var(--spacing));

        --fs-normal: 16px;
        --fs-h-s: calc(1.25 * var(--fs-normal));
        --fs-h-m: calc(2 * var(--fs-normal));
        --fs-h-l: calc(3.5 * var(--fs-normal));

        --fw-normal: 500;
        --fw-semibold: 600;
        --fw-bold: 700;

        --rounded-s: 4px;
        --rounded-m: 8px;
        --rounded-l: 20px;

        --header-height: 60px;

        --gap: var(--spacing);

        --z-index-behind: -1;
        --z-index-normal: 0;
        --z-index-over-1: 10;
        --z-index-over-2: 20;
        --z-index-over-3: 30;
        --z-index-over-4: 40;
    }

    /* resets */

    html {
        box-sizing: border-box;
        font-size: var(--fs-normal);
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-family: 'Oxygen', Arial, Helvetica, sans-serif;
        background: var(--clr-primary-100);
        color: var(--clr-txt);
    }

    a,
    a:visited,
    .link,
    .link:visited {
        color: var(--clr-txt);
        text-decoration: none;
        font-weight: var(--fw-semibold);
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        user-select: none;
        transition: all 225ms ease-in-out;
    }

    a:hover,
    .link:hover,
    .link:active {
        color: var(--clr-tertiary-50);
        text-decoration: none;
        background: none;
        border: none;
        outline: none;
        user-select: none;
    }

    .active-link {
        color: var(--clr-tertiary-50) !important;
    }

    ol,
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* typography */

    h1 {
        font-size: var(--fs-h-l);
        margin: 0;
        margin-bottom: var(--spacing-l);
    }

    h2 {
        font-size: var(--fs-h-m);
        margin: 0;
        margin-bottom: var(--spacing-s);
    }

    h3 {
        font-size: var(--fs-h-s);
        margin: 0;
        margin-bottom: var(--spacing-s);
    }

    h4 {
        margin: 0;
    }

    /* utils */

    .fullscreen {
        min-height: 100vh;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centered > * {
        width: 100%;
    }

    .transition-ease-in-out {
        transition: all 225ms ease-in-out;
    }
</style>
