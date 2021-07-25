<script>
    import {fly, fade } from 'svelte/transition';
    import Portal from './Portal.svelte';
    import { clickOutside } from "$lib/clickOutside";

    export let isModalOpen = false;
    export let background = true;

    function closeModal() {
        isModalOpen = false;
    }
</script>

{#if isModalOpen}
    <Portal>
        <div use:clickOutside on:click-outside={closeModal} class="modal" transition:fly={{opacity: 0, y: 100}}>
            <button on:click={closeModal} aria-label="Close modal">x</button>
            <slot />
        </div>
        {#if background}
            <div on:click={closeModal} class="backdrop" transition:fade></div>
        {/if}
    </Portal>
{/if}

<style>
    .modal {
        position: fixed;
        inset: 100px 0;
        min-width: 320px;
        max-height: 50vh;
        max-width: 50vw;
        background: #fff;
        z-index: 101;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #f1f1f1;
        box-shadow: 0 0 30px rgba(0, 0, 0, .35);
    }

    button {
        position: absolute;
        top: -10px;
        right: -10px;
    }

    .backdrop {
        position: fixed;
        background: rgba(0, 0, 0, .75);
        inset: 0;
        width: 100vw;
        height: 100vh;
        cursor: pointer;
        z-index: 100
    }
</style>