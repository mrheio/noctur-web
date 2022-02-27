<script>
    export let name = '';
    export let label = '';
    export let value = '';
    export let options = [];
    export let optionValueTransformer = undefined;
    export let optionDisplayTransformer = undefined;
</script>

<div>
    <label class="text-lg" for={name}>{label}</label>
    <select
        class="h-12 w-full px-1 bg-transparent border-2 border-secondary-600 rounded-md outline-none hover:border-secondary-400 focus:border-secondary-300 transition-all duration-300 ease-in-out"
        bind:value
        {name}
    >
        {#each options as option}
            <option
                class="bg-secondary-800 hover:bg-secondary-700"
                value={optionValueTransformer(option)}
            >
                {optionDisplayTransformer(option)}
            </option>
        {/each}
    </select>
</div>
