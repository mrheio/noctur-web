<div>
    <slot />
</div>

<style>
    div {
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
</style>
