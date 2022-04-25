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
        --clr-primary-h: 260;
        --clr-primary-s: 100%;
        --clr-primary-l: 50%;

        --clr-primary-10: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) + 40%)
        );
        --clr-primary-20: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) + 30%)
        );
        --clr-primary-30: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) + 20%)
        );
        --clr-primary-40: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) + 10%)
        );
        --clr-primary-50: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            var(--clr-primary-l)
        );
        --clr-primary-60: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) - 10%)
        );
        --clr-primary-70: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) - 20%)
        );
        --clr-primary-80: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) - 30%)
        );
        --clr-primary-90: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) - 40%)
        );
        --clr-primary-100: hsl(
            var(--clr-primary-h),
            var(--clr-primary-s),
            calc(var(--clr-primary-l) - 45%)
        );

        --clr-secondary-h: 333;
        --clr-secondary-s: 100%;
        --clr-secondary-l: 50%;

        --clr-secondary-10: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) + 40%)
        );
        --clr-secondary-20: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) + 30%)
        );
        --clr-secondary-30: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) + 20%)
        );
        --clr-secondary-40: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) + 10%)
        );
        --clr-secondary-50: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            var(--clr-secondary-l)
        );
        --clr-secondary-60: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) - 10%)
        );
        --clr-secondary-70: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) - 20%)
        );
        --clr-secondary-80: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) - 30%)
        );
        --clr-secondary-90: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) - 40%)
        );
        --clr-secondary-100: hsl(
            var(--clr-secondary-h),
            var(--clr-secondary-s),
            calc(var(--clr-secondary-l) - 45%)
        );

        --clr-text: #eee;
        --clr-text-faded: #ddd;
        --clr-bg: hsl(var(--clr-primary-h), 40%, 10%);
        --clr-primary-box-shadow: var(--clr-primary-90);

        --spacing: 16px;
        --spacing-xxs: calc(0.25 * var(--spacing));
        --spacing-xs: calc(0.5 * var(--spacing));
        --spacing-s: calc(0.75 * var(--spacing));
        --spacing-m: var(--spacing);
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
        --fs-h-s: 1.5rem;
        --fs-h-m: 2.25rem;
        --fs-h-l: 3.75rem;

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

        --navbar-height: 56px;
    }

    @import './vars.css';

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

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

    ul,
    ol {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        line-height: 1.5;
        background-color: var(--clr-bg);
        color: var(--clr-text);
    }

    *::-webkit-scrollbar {
        width: 0.35rem;
    }

    *::-webkit-scrollbar-track {
        box-shadow: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--clr-primary-80);
        outline: none;
        border-radius: var(--rounded-s);
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

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

    @import './vars.css';

    .page {
        --page-offset-inline: var(--spacing-s);
        --page-offset-top: var(--navbar-height);
        min-height: 100vh;
        padding-inline: var(--page-offset-inline);
        padding-top: var(--page-offset-top);
    }

    .sections-wrapper > * + * {
        margin-top: var(--spacing-m);
    }

    .flex-col-centered {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        align-items: center;
    }

    .bg-overlay {
        position: relative;
    }

    .bg-overlay::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: var(--z-index-over-3);
    }

    .bg-overlay > * {
        z-index: var(--z-index-over-4);
    }

    .bg-overlay--darken::before {
        -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0)),
            to(rgba(0, 0, 0, 1))
        );
        mask-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0)),
            to(rgba(0, 0, 0, 1))
        );
        background-color: var(--clr-bg);
    }

    .flex {
        display: flex;
    }

    .flex-center {
        justify-content: center;
        align-items: center;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .fullheight {
        min-height: calc(100vh - var(--navbar-height));
    }

    @import './vars.css';

    .text-center {
        text-align: center;
    }

    .text-justify {
        text-align: justify;
    }

    .header-s {
        font-size: var(--fs-h-s);
    }

    .header-m {
        font-size: var(--fs-h-m);
    }

    .header-l {
        font-size: var(--fs-h-l);
    }

    .text-faded {
        color: var(--clr-text-faded);
    }

    .card-top-right {
        position: absolute;
        top: 8px;
        right: 8px;
    }

    .btn--clear,
    .btn--clear:hover,
    .btn--clear:active,
    .btn--clear:not(:disabled):active,
    .btn--clear:focus {
        background-color: transparent;
        color: var(--clr-text);
        outline: none;
        border: none;
        cursor: pointer;
    }

    .text-clr-primary {
        color: var(--clr-primary-30);
    }

    .text-clr-secondary {
        color: var(--clr-secondary-30);
    }

    .display-none {
        display: none;
    }

    .display-block {
        display: block;
    }

    /* elements */

    a,
    a:visited,
    .link,
    .link:visited {
        cursor: pointer;
        text-decoration: none;
        color: var(--clr-text);
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
        color: var(--clr-secondary-50);
        background: transparent;
    }

    input,
    .input-field,
    select,
    .select-field {
        background-color: var(--clr-primary-80);
        color: var(--clr-text);
        border: none;
        outline: none;
        width: 100%;
        padding: var(--spacing-s) var(--spacing-xs);
        margin: 0;
    }

    input:active,
    input:focus,
    .input-field:active,
    .input-field:focus,
    select:active,
    select:focus,
    .select-field:active,
    .select-field:focus {
        border: 2px solid var(--clr-primary-40);
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
