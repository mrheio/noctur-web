<script>
    import { Card } from '../common/components';

    export let src;
    export let alt;
</script>

<Card size="fill" color="primary" outlined="primary" centered>
    <img class="GameLogoCard__img" {src} {alt} />
</Card>

<style>
    .GameLogoCard__img {
        object-fit: cover;
        max-height: 120px;
    }
</style>
