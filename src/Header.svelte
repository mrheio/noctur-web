<script>
    import { Link } from 'svelte-routing';
    import { authStore, logOut } from './auth/authStore';

    $: ({ user } = $authStore);

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
                    class="navbar__logo wtransition"
                    src="../assets/imgs/logos/logo.png"
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
                <button class="link" type="button" on:click={logOut}>
                    Log out
                </button>
            {:else}
                <Link to="login" {getProps}>Login</Link>
                <Link to="register" {getProps}>Inregistrare</Link>
            {/if}
        </div>
    </nav>
</header>

<style>
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
        gap: var(--gap-l);
        align-items: center;
    }

    .navbar__logo {
        width: 40px;
    }

    .navbar__logo:hover {
        filter: saturate(2.5);
    }
</style>
