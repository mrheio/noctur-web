<script>
    import { Link } from 'svelte-routing';
    import { authStore, logOut } from './auth/authStore';

    $: ({ loggedUser } = $authStore);

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
    <nav class="h-16 px-4 flex items-center justify-between">
        <div class="flex gap-4 items-center">
            <Link to="/" class="w-12"
                ><img src="assets/svg/iechipele.svg" alt="logo" /></Link
            >
            {#if loggedUser}
                <Link to="teams" {getProps}>Echipe</Link>
                <Link to="games" {getProps}>Jocuri</Link>
            {/if}
        </div>
        <div class="flex gap-4 items-center">
            {#if loggedUser}
                <button class="link" type="button" on:click={handleLogOut}>
                    Iesi din cont
                </button>
            {/if}
        </div>
    </nav>
</header>
