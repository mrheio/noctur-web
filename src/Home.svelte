<script>
    import { navigate } from 'svelte-routing';

    const handleNavigateToLogin = () => {
        navigate('login');
    };

    const handleNavigateToRegister = () => {
        navigate('register');
    };
</script>

<h3>
    Daca vrei sa intri in cont da
    <span
        class="cursor-pointer font-bold hover:text-secondary-300 transition-all duration-300 ease-in-out"
        on:click={handleNavigateToLogin}>aici</span
    >.
</h3>
<h3>
    Daca nu ai inca un cont, creeaza-ti unul
    <span
        class="cursor-pointer font-bold hover:text-secondary-300 transition-all duration-300 ease-in-out"
        on:click={handleNavigateToRegister}>aici</span
    >.
</h3>
