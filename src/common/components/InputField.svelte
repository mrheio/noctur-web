<script>
    export let type = 'text';
    export let name = '';
    export let label = '';
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
    <label class="input-label" for={name}>{label}</label>
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
