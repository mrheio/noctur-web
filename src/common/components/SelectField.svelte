<script>
    export let name = '';
    export let label = '';
    export let value = '';
    export let options = [];
    export let optionValueTransformer = undefined;
    export let optionDisplayTransformer = undefined;
</script>

<div class="SelectField">
    <label class="SelectField__label" for={name}>{label}</label>
    <select class="SelectField__select" bind:value {name}>
        {#each options as option}
            <option value={optionValueTransformer(option)}>
                {optionDisplayTransformer(option)}
            </option>
        {/each}
    </select>
</div>

<style>
    .SelectField__select {
        background-color: var(--clr-primary-80);
        color: var(--clr-text);
        border: none;
        outline: none;
        width: 100%;
        padding: var(--spacing-s) var(--spacing-m);
        border-radius: var(--rounded-s);
    }

    .SelectField__select:active,
    .SelectField__select:focus {
        border: 2px solid var(--clr-primary-40);
    }
</style>
