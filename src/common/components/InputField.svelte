<script>
    export let type = 'text';
    export let name = '';
    export let label = undefined;
    export let value = '';
    export let placeholder = '';
    export let disabled = false;
    export let fill = false;

    let classses = '';

    $: classes = `InputField ${fill ? 'InputField--fill' : ''}`;

    const handleInput = (e) => {
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    };
</script>

<div class={classes}>
    {#if label}
        <label class="InputField__label" for={name}>{label}</label>
    {/if}
    <input
        class="InputField__input"
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

<style>
    .InputField {
        max-width: 480px;
    }

    .InputField--fill {
        max-width: 100%;
    }

    .InputField__input {
        background-color: var(--clr-primary-80);
        color: var(--clr-text);
        border: none;
        outline: none;
        width: 100%;
        padding: var(--spacing-s) var(--spacing-m);
        border-radius: var(--rounded-s);
    }

    .InputField__input:active,
    .InputField__input:focus {
        border: 2px solid var(--clr-primary-40);
    }

    .InputField__input:-webkit-autofill,
    .InputField__input:-webkit-autofill:hover,
    .InputField__input:-webkit-autofill:focus,
    .InputField__input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px var(--clr-primary-80) inset;
        box-shadow: 0 0 0 30px var(--clr-primary-80) inset;
        -webkit-text-fill-color: var(--clr-text);
    }
</style>
