<script>
    export let type = 'text';
    export let name = '';
    export let label = undefined;
    export let value = '';
    export let placeholder = '';
    export let disabled = false;

    const handleInput = (e) => {
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    };
</script>

<div>
    {#if label}
        <label class="input-label" for={name}>{label}</label>
    {/if}
    <input
        class="input-field"
        {name}
        title={label}
        {placeholder}
        {type}
        {value}
        on:input={handleInput}
        on:keypress
        {disabled}
    />
</div>
