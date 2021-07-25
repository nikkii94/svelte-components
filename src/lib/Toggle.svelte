<script>
    export let isToggled = false;
    export let label = '';
    export let style = '';
</script>

<label {style}>
    <input type="checkbox" bind:checked={isToggled} />
    <div class="toggle" />
    {label}
</label>

<style>
    label {
        --width: 40px;
        --height: calc(var(--width) / 2);
        --radius: calc(var(--height) / 2);
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .toggle {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--radius);
        border: 1px solid #e3e3e3;
        transition: background-color .3s ease;
        margin-right: 5px;
    }

    input {
        display: none;
    }

    .toggle::after {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: var(--height);
        height: var(--height);
        border-radius: var(--radius);
        background: var(--background, aqua);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .05);
        transition: transform linear .2s;
    }

    input:checked + .toggle {
        background: var(--buttonColor, #fefefe);
    }

    input:checked + .toggle:after {
        transform: translate3d(100%, 0, 0);
        background: var(--toggledButtonColor, lightgreen);
    }
</style>