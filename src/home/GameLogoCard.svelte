<script>
    export let src;
    export let alt;
</script>

<div class="GameLogoCard">
    <img class="GameLogoCard__img" {src} {alt} />
</div>

<style>
    .GameLogoCard {
        background-color: var(--clr-primary-90);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--spacing-m);
        border-radius: var(--rounded-m);
        border: 2px solid var(--clr-primary-100);
    }

    .GameLogoCard__img {
        object-fit: cover;
        max-height: 120px;
    }
</style>
