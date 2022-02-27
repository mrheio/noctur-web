<script>
    export let type = 'text';
    export let name = '';
    export let label = '';
    export let value = '';

    const handleInput = (e) => {
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    };
</script>

<div>
    <label class="text-lg" for={name}>{label}</label>
    <input
        class="h-12 w-full px-1 bg-transparent border-2 border-secondary-600 rounded-md outline-none hover:border-secondary-400 focus:border-secondary-300 transition-all duration-300 ease-in-out"
        {name}
        title={label}
        {type}
        {value}
        on:input={handleInput}
    />
</div>
