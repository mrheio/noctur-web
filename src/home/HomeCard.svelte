<div class="HomeCard">
    <slot />
</div>

<style>
    .HomeCard {
        background-color: rgba(0, 0, 0, 0.45);
        border-radius: var(--rounded-m);
        padding: var(--spacing-m);
        width: min(80%, 520px);
    }
</style>
