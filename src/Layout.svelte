<script>
    import { Link } from 'svelte-routing';
    import { authStore, logOut } from './auth/authStore';
    import { AppRoute, routes } from './routing';

    $: ({ user } = $authStore);

    const handleLogOut = async () => {
        await logOut();
    };

    const getProps = (props) => {
        if (props.isCurrent) {
            return { class: 'link link--active' };
        }
        return { class: 'link' };
    };
</script>

<header class="header">
    <nav class="navbar">
        <div class="navbar__group">
            <Link to="/" {getProps}>
                <img
                    class="navbar__logo"
                    src="../assets/imgs/logo.png"
                    alt=""
                />
            </Link>
            {#if user}
                <Link to="teams" {getProps}>Echipe</Link>
                <Link to="games" {getProps}>Jocuri</Link>
            {/if}
        </div>
        <div class="navbar__group">
            {#if user}
                <Link to="user/profile" {getProps}>
                    {user.username}
                </Link>
                <button class="link" type="button" on:click={handleLogOut}>
                    Iesi din cont
                </button>
            {/if}
        </div>
    </nav>
</header>

<main class="page">
    {#each routes as route}
        <AppRoute {route} />
    {/each}
</main>

<style global>
    .navbar {
        position: fixed;
        inset: 0 0 auto 0;
        z-index: var(--z-index-over-5);
        display: flex;
        justify-content: space-between;
        height: var(--navbar-height);
        padding-inline: var(--spacing-s);
        background-color: var(--clr-primary-100);
    }

    .navbar__group {
        display: flex;
        gap: var(--gap);
        align-items: center;
    }

    .navbar__logo {
        width: 48px;
        margin-inline-end: var(--spacing-s);
    }

    .page {
        min-height: 100vh;
        padding-inline: var(--spacing-s);
        padding-top: var(--navbar-height);
    }
</style>
