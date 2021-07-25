<script>
    import {fly, fade } from 'svelte/transition';
    import Portal from './Portal.svelte';

    export let isModalOpen = false;

    function closeModal() {
        isModalOpen = false;
    }
</script>

{#if isModalOpen}
    <Portal>
        <div class="modal" transition:fly={{opacity: 0, y: 100}}>
            <button on:click={closeModal} aria-label="Close modal">x</button>
            <slot />
        </div>
        <div on:click={closeModal} class="backdrop" transition:fade></div>
    </Portal>
{/if}

<style>
    .modal {
        position: fixed;
        inset: 100px 0;
        min-width: 320px;
        max-height: 50vh;
        max-width: 50vw;
        background: #fefefe;
        z-index: 101;
        width: 100%;
        margin: 0 auto;
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