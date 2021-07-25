<script>
    import { slide } from 'svelte/transition';
    export let buttonText = '';
    export let isOpen = true;
</script>

<div class="wrapper">
    <button on:click={() => isOpen = !isOpen}>{buttonText}</button>
    {#if isOpen}
        <div transition:slide>
            <slot />
        </div>
    {/if}
</div>

<style>
    .wrapper {
        padding: 5px;
        border: 1px solid #f3f3f3;
        margin-bottom: 10px;
    }
</style>