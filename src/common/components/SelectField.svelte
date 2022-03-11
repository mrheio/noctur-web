<script>
    export let name = '';
    export let label = '';
    export let value = '';
    export let options = [];
    export let optionValueTransformer = undefined;
    export let optionDisplayTransformer = undefined;
</script>

<div>
    <label for={name}>{label}</label>
    <select bind:value {name}>
        {#each options as option}
            <option value={optionValueTransformer(option)}>
                {optionDisplayTransformer(option)}
            </option>
        {/each}
    </select>
</div>

<style>
    div {
        width: 100%;
        text-align: start;
    }

    label {
        display: block;
        margin-bottom: var(--spacing-xs);
    }

    select {
        background: var(--clr-primary-80);
        color: var(--clr-txt);
        display: block;
        width: 100%;
        padding: var(--spacing-s);
        border: none;
        border-radius: var(--rounded-s);
        outline: none;
    }
</style>
