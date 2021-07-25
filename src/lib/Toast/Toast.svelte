<script>
    import {fly, fade} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Portal from '../Portal.svelte';
    import {toast} from './toast';
    import ToastMessage from "./ToastMessage.svelte";

    export let duration;

    /*let progress = tweened(0, {
        duration: 500,
   });

    async function updateProgress() {
        const newProgress = Math.random() * 100;
        await progress.set(newProgress);
        toast.remove();
    }*/

</script>

<!--<h1>{$progress}</h1>-->
<!--<div style={`width: ${$progress}%; height: 10px; background: purple;`}></div>-->
<!--<button on:click={updateProgress}>Go</button>-->

<Portal>
    <div class="toast-wrapper" transition:fade>
        {#each $toast as message (message)}
            <div on:click={() => toast.remove()} class="toast" in:fly={{ opacity: 0, x: 100 }} out:fade animate:flip>
                <ToastMessage {message} {duration} />
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
        cursor: pointer;
        margin-bottom: 1rem;
        padding: 5px 20px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
        background: aquamarine;
        z-index: 103;
    }
</style>