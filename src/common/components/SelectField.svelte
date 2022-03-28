<script>
    export let name = '';
    export let label = '';
    export let value = '';
    export let options = [];
    export let optionValueTransformer = undefined;
    export let optionDisplayTransformer = undefined;
</script>

<div>
    <label class="select-label" for={name}>{label}</label>
    <select class="select-field" bind:value {name}>
        {#each options as option}
            <option value={optionValueTransformer(option)}>
                {optionDisplayTransformer(option)}
            </option>
        {/each}
    </select>
</div>

<style>
</style>
