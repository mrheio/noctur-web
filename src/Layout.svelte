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
            return { class: 'active' };
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
        <div>
            {#if user}
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
        background: var(--clr-primary-100);
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 200;
        height: var(--size-s);
        padding: 0 var(--spacing-s);
    }

    nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-group {
        display: flex;
        gap: 8px;
    }

    .active {
        color: var(--clr-secondary-50);
    }
</style>
