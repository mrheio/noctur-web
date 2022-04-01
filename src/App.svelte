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

        --spacing: 16px;
        --spacing-xxxs: calc(1 / 8 * var(--spacing));
        --spacing-xxs: calc(0.25 * var(--spacing));
        --spacing-xs: calc(0.5 * var(--spacing));
        --spacing-s: calc(0.75 * var(--spacing));
        --spacing-m: calc(1 * var(--spacing));
        --spacing-l: calc(1.25 * var(--spacing));
        --spacing-xl: calc(1.5 * var(--spacing));
        --spacing-xxl: calc(2 * var(--spacing));

        --gap: 0.5rem;
        --gap-xxs: calc(0.25 * var(--gap));
        --gap-xs: calc(0.5 * var(--gap));
        --gap-s: calc(0.75 * var(--gap));
        --gap-m: calc(1 * var(--gap));
        --gap-l: calc(1.25 * var(--gap));
        --gap-xl: calc(1.5 * var(--gap));
        --gap-xxl: calc(2 * var(--gap));

        --fs-normal: 16px;
        --fs-h-s: calc(1.25 * var(--fs-normal));
        --fs-h-m: calc(2 * var(--fs-normal));
        --fs-h-l: calc(3.5 * var(--fs-normal));

        --fw-normal: 500;
        --fw-semibold: 600;
        --fw-bold: 700;

        --rounded-s: 6px;
        --rounded-m: 12px;
        --rounded-l: 24px;

        --z-index-behind: -1;
        --z-index-base: 0;
        --z-index-over-1: 10;
        --z-index-over-2: 20;
        --z-index-over-3: 30;
        --z-index-over-4: 40;
        --z-index-over-5: 50;
        --z-index-over-6: 60;
        --z-index-over-7: 70;
        --z-index-over-8: 80;
        --z-index-over-9: 90;
        --z-index-over-10: 100;

        --navbar-height: 60px;
    }

    /* resets */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul,
    ol {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background: var(--clr-primary-100);
        color: var(--clr-txt);
    }

    body::-webkit-scrollbar {
        width: 0.35rem;
    }

    body::-webkit-scrollbar-track {
        box-shadow: transparent;
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--clr-primary-70);
        outline: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    h1 {
        margin-bottom: var(--spacing-l);
    }

    h2 {
        margin-bottom: var(--spacing-m);
    }

    h3 {
        margin-bottom: var(--spacing-s);
    }

    h4 {
        margin-bottom: var(--spacing-xs);
    }

    /* layout */

    .flex-centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flow > * + * {
        margin-top: var(--spacing-s);
    }

    /* utility */
    .absolute-top-right {
        position: absolute;
        top: 4px;
        right: 4px;
    }

    .btn--clear,
    .btn--clear:hover,
    .btn--clear:active,
    .btn--clear:focus {
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
    }

    .fullscreen {
        position: fixed;
        inset: 0;
    }

    .fullscreen--faded::before {
        content: '';
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        inset: 0;
    }

    .fullscreen--faded > * {
        z-index: var(--z-index-over-1);
    }

    .fullheight {
        min-height: calc(100vh - var(--navbar-height));
    }

    .padding-inline-s {
        padding-inline: var(--spacing-s);
    }

    .text-align-center {
        text-align: center;
    }

    .txt-clr {
        color: var(--clr-txt);
    }

    .txt-clr-gray {
        color: var(--clr-txt-gray);
    }

    .bg-clr-primary-50 {
        background-color: var(--clr-primary-50);
    }

    .bg-clr-primary-100 {
        background-color: var(--clr-primary-100);
    }

    .bg-clr-secondary-50 {
        background-color: var(--clr-secondary-50);
    }

    .wtransition {
        transition: all 250ms ease-in-out;
    }

    /* elements */

    a,
    a:visited,
    .link,
    .link:visited {
        cursor: pointer;
        text-decoration: none;
        color: var(--clr-txt);
        font-weight: var(--fw-semibold);
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }

    a:hover,
    a:active,
    .link:hover,
    .link:active,
    .link:not(:disabled):active,
    .link--active,
    .link--active:hover,
    .link--active:visited {
        text-decoration: none;
        color: var(--clr-tertiary-50);
        background: transparent;
    }

    input,
    .input-field,
    select,
    .select-field {
        background-color: var(--clr-primary-80);
        color: var(--clr-txt);
        border: none;
        outline: none;
        width: 100%;
        padding: var(--spacing-s) var(--spacing-xs);
    }

    input:active,
    input:focus,
    .input-field:active,
    .input-field:focus,
    select:active,
    select:focus,
    .select-field:active,
    .select-field:focus {
        border: 2px solid var(--clr-primary-30);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px var(--clr-primary-80) inset;
        box-shadow: 0 0 0 30px var(--clr-primary-80) inset;
        -webkit-text-fill-color: var(--clr-txt);
    }
</style>
