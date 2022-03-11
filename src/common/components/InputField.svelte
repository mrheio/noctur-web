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
    <label class="InputField__label" for={name}>{label}</label>
    <input
        class="InputField__input"
        {name}
        title={label}
        {type}
        {value}
        on:input={handleInput}
    />
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

    input {
        background: var(--clr-primary-80);
        color: var(--clr-txt);
        display: block;
        width: 100%;
        padding: var(--spacing-s);
        border: none;
        border-radius: var(--rounded-s);
        outline: none;
    }
    input:focus,
    input:active {
        background: var(--clr-primary-70);
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-text-fill-color: var(--clr-txt);
        -webkit-box-shadow: 0 0 0px 1000px var(--clr-primary-80) inset !important;
        box-shadow: 0 0 0px 1000px var(--clr-primary-80) inset !important;
    }
</style>
