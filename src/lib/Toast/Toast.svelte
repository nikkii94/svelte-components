<script>
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import Portal from '../Portal.svelte';
    import { toast } from './toast';
</script>

<Portal>
    <div class="toast-wrapper" transition:fade>
        {#each $toast as message (message)}
            <div on:click={() => toast.remove()} class="toast" in:fly={{ opacity: 0, x: 100 }} out:fade animate:flip>
                <p>{message}</p>
            </div>
        {/each}
    </div>
</Portal>

<style>
    .toast-wrapper {
        position: fixed;
        bottom: 0;
        right: 20px;
    }

    .toast {
        margin-bottom: 1rem;
        padding: 5px 20px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
        background: aquamarine;
        z-index: 103;
    }
</style>