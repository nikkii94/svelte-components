<script>
    import marked from 'marked';
    import DOMPurify from 'dompurify';

    export let text = '';
    let markdownText = text;
    export let cols = 40;
    export let rows = 10;

    // Reactive expression
    $: {
        // markdownText = DOMPurify.sanitize(marked(text));
        markdownText = marked(text);
    }
</script>

<div class="markdown-container">
    <textarea {cols} {rows} bind:value={text}></textarea>
    <div>{@html markdownText}</div>
</div>

<style>
    .markdown-container {
        display: flex;
        align-items: start;
    }
    .markdown-container > * {
        width: 50%;
    }
</style>