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

<div class="InputField">
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
    .InputField {
        text-align: start;
    }

    .InputField__label {
        display: block;
        font-size: var(--fs-h-s);
        margin-bottom: var(--spacing-s);
    }

    .InputField__input {
        display: block;
        width: 100%;
        background: var(--clr-primary-80);
        color: var(--clr-txt);
        border: none;
        border-radius: 4px;
        outline: none;
        padding: var(--spacing-s);
    }

    .InputField__input:-webkit-autofill,
    .InputField__input:-webkit-autofill:hover,
    .InputField__input:-webkit-autofill:focus,
    .InputField__input:-webkit-autofill:active {
        -webkit-text-fill-color: var(--clr-txt);
        -webkit-box-shadow: 0 0 0px 1000px var(--clr-primary-80) inset !important;
        box-shadow: 0 0 0px 1000px var(--clr-primary-80) inset !important;
    }
</style>
