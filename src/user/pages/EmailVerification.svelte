<script>
    import { sendEmailVerification } from 'firebase/auth';
    import { onDestroy, onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authService } from '../../auth/data/authService';
    import { firebaseAuth } from '../../common/firebase';

    let verified = false;

    const intervalId = setInterval(async () => {
        await authService.refreshUser();
        verified = authService.isEmailVerified();
    }, 1500);

    $: {
        if (verified) {
            navigate('/', { replace: true });
        }
    }

    onMount(async () => {
        await sendEmailVerification(firebaseAuth.currentUser, {
            url: 'https://iechipele.web.app',
        });
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<div class="fullheight flex-centered">
    <h1>Trebuie sa iti verifici emailul</h1>
</div>
