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
            url: 'https://noctur.web.app',
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

<div class="full-height container container--fill container--centered">
    {#if !verified}
        <FlexColumn centered>
            <h1>Trebuie sa iti verifici emailul</h1>
            <Btn type="button" on:click={sendEmail}>Retrimite verificare</Btn>
        </FlexColumn>
    {:else}
        <h1>Email verificat. Da refresh la pagina.</h1>
    {/if}
</div>
