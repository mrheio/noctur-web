<script>
    import { Router } from 'svelte-routing';
    import { authStore, getLoggedUser$ } from './auth/authStore';
    import { Loading } from './common/components';
    import './common/styles/layout.css';
    import './common/styles/resets.css';
    import './common/styles/utility.css';
    import './common/styles/vars.css';
    import Layout from './Layout.svelte';

    $: ({ isLoading } = $authStore);

    getLoggedUser$();
</script>

<Router>
    <Loading condition={isLoading}>
        <Layout />
    </Loading>
</Router>
