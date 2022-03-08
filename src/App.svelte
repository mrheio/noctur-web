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
        --clr-primary-100: #090019;

        --clr-secondary-0: #fcf0f4;
        --clr-secondary-10: #f5d2df;
        --clr-secondary-20: #eeb5c9;
        --clr-secondary-30: #e797b3;
        --clr-secondary-40: #e0799e;
        --clr-secondary-50: #dd6a93;
        --clr-secondary-60: #b15576;
        --clr-secondary-70: #854058;
        --clr-secondary-80: #582a3b;
        --clr-secondary-90: #2c151d;
        --clr-secondary-100: #160b0f;

        --clr-tertiary-0: #f5e6f9;
        --clr-tertiary-10: #e2b4ee;
        --clr-tertiary-20: #cf82e2;
        --clr-tertiary-30: #bc50d6;
        --clr-tertiary-40: #b237d1;
        --clr-tertiary-50: #9f05c5;
        --clr-tertiary-60: #8f05b1;
        --clr-tertiary-70: #6f048a;
        --clr-tertiary-80: #500363;
        --clr-tertiary-90: #30013b;
        --clr-tertiary-100: #200127;

        --clr-txt: #fff;
        --clr-txt-gray: #e0e0e0;

        --spacing-xs: 0.25rem;
        --spacing-s: 0.65rem;
        --spacing-m: 1.5rem;
        --spacing-l: 3.5rem;

        --size-s: 56px;
        --size-m: 320px;
        --size-l: 576px;

        --breakpoint-s: 576px;
        --breakpoint-m: 1024px;
        --breakpoint-l: 1280px;

        --fs-normal: 16px;
        --fs-h-s: calc(1.25 * var(--fs-normal));
        --fs-h-m: calc(2 * var(--fs-normal));
        --fs-h-l: calc(3.5 * var(--fs-normal));
    }

    /* basics */

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
        margin: var(--spacing-m) 0;
    }

    h2 {
        font-size: var(--fs-h-m);
        margin: var(--spacing-s) 0;
    }

    h3 {
        font-size: var(--fs-h-s);
        margin: var(--spacing-xs) 0;
    }

    /* utility */

    .fullscreen {
        height: 100vh;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a,
    .link {
        cursor: pointer;
        color: var(--clr-txt) !important;
        text-decoration: none;
        background: none;
        border: none;
        outline: none;
        font-weight: 600;
        padding: 0;
        margin: 0;
    }

    a:hover,
    .link:hover {
        text-decoration: none;
        color: var(--clr-secondary-50) !important;
    }

    .link:active {
        background: none !important;
    }

    .active-link {
        color: var(--clr-secondary-50) !important;
    }

    .wtransition {
        transition: all 225ms ease-in-out;
    }

    .gray-overlay {
        position: relative;
        z-index: 0;
    }

    .gray-overlay::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
        pointer-events: none;
    }

    .gray-overlay * {
        position: relative;
        z-index: 1;
    }
</style>
