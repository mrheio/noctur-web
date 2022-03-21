<script>
    import { Link } from 'svelte-routing';
    import { authStore, logOut } from './auth/authStore';
    import { AppRoute, routes } from './routing';

    $: ({ user } = $authStore);

    const handleLogOut = async () => {
        await logOut();
    };

    const getProps = ({ href, isCurrent }) => {
        if (isCurrent) {
            return { class: 'active-link' };
        }
        return {};
    };
</script>

<header>
    <nav>
        <div class="nav-group">
            <Link to="/" {getProps}>Acasa</Link>
            {#if user}
                <Link to="teams" {getProps}>Echipe</Link>
                <Link to="games" {getProps}>Jocuri</Link>
            {/if}
        </div>
        <div class="nav-group">
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

<main>
    {#each routes as route}
        <AppRoute {route} />
    {/each}
</main>

<style>
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: var(--z-index-over-5);
    }

    nav {
        background: rgb(12, 7, 7);
        height: var(--header-height);
        padding-inline: var(--spacing-m);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-group {
        display: flex;
        gap: var(--spacing-s);
    }

    main {
        height: 100vh;
        padding: 0 var(--spacing-m);
        margin-top: var(--header-height);
    }
</style>
