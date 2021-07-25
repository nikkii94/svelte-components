<script>
    export let label = '';
    export let instructions = '';
    export let style = '';
    export let value;
    export let placeholder = '';
    export let type = 'text';

    const handleInput = (e) => {
        value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
    };
</script>

<div {style}>
    <label>
        {#if label}
            <span>{label}</span>
        {/if}
        {#if instructions}
            <span class="instructions">{instructions}</span>
        {/if}
        <input {type} {placeholder} {value} on:input={handleInput} />
    </label>
</div>

<style>
    div {
        display: inline-block;
        margin-bottom: 10px;
    }

    .instructions {
        opacity: .7;
        font-size: var(--instructionsFontSize, 14px);
    }

    span {
        display: block;
        margin-bottom: 5px;
    }
</style>