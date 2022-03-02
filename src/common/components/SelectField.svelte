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
        text-align: start;
    }

    label {
        display: block;
        font-size: var(--fs-h-s);
        margin-bottom: var(--spacing-xs);
    }

    select {
        display: block;
        width: 100%;
        background: var(--clr-primary-80);
        color: var(--clr-txt);
        border: none;
        border-radius: 4px;
        outline: none;
        padding: var(--spacing-s);
    }
</style>
