<script>
    import { getIdToken, sendEmailVerification } from 'firebase/auth';
    import { onDestroy, onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authService } from '../../auth/data/authService';
    import { Btn, FlexColumn } from '../../common/components';
    import { firebaseAuth } from '../../common/firebase';

    let verified = firebaseAuth.currentUser.emailVerified;

    const intervalId = setInterval(async () => {
        await authService.refreshUser();
        verified = authService.isEmailVerified();
    }, 5000);

    const sendEmail = async () => {
        await sendEmailVerification(firebaseAuth.currentUser, {
            url: 'https://iechipele.web.app',
        });
    };

    onMount(async () => {
        await sendEmail();
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });

    $: {
        if (verified) {
            getIdToken(firebaseAuth.currentUser, true);
            navigate('/', { replace: true });
        }
    }
</script>

{#if !verified}
    <div class="fullheight flex-centered">
        <FlexColumn centered>
            <h1>Trebuie sa iti verifici emailul</h1>
            <Btn type="button" on:click={sendEmail}>Retrimite verificare</Btn>
        </FlexColumn>
    </div>
{:else}
    <div class="fullheight flex-centered">
        <h1>Email verificat. Da refresh la pagina.</h1>
    </div>
{/if}
