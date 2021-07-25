<script>
    import {tweened} from "svelte/motion";
    import {toast} from "./toast";
    import {onMount} from "svelte";

    export let message;
    export let duration = 1000;

    let progress = tweened(100, {
        duration: duration,
    });

    onMount(async () => {
        await progress.set(0);
        toast.remove();
    });
</script>

<p>{message}</p>
<div style={`width: ${$progress}%; height: 10px; background: purple;`}></div>