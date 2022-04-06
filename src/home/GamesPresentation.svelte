<script>
    import GameLogoCard from './GameLogoCard.svelte';
</script>

<div class="GamesPresentation">
    <GameLogoCard
        src="../assets/imgs/games/lol_logo.png"
        alt="League of Legends"
    />
    <GameLogoCard src="../assets/imgs/games/cs_logo.png" alt="Counter Strike" />
    <GameLogoCard src="../assets/imgs/games/fortnite_logo.png" alt="Fortnite" />
    <GameLogoCard src="../assets/imgs/games/hs_logo.png" alt="Hearthstone" />
    <GameLogoCard src="../assets/imgs/games/ow_logo.png" alt="Overwatch" />
    <GameLogoCard src="../assets/imgs/games/valorant_logo.png" alt="Valorant" />
    <GameLogoCard src="../assets/imgs/games/dota_logo.png" alt="Dota 2" />
    <GameLogoCard
        src="../assets/imgs/games/ets_logo.png"
        alt="Euro Truck Simulator 2"
    />
</div>

<style>
    .GamesPresentation {
        display: grid;
        gap: var(--gap);
        grid-template-columns: repeat(2, 1fr);
    }
</style>
