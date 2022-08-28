<script>
    import { useSWR } from "sswr";
    // Call the `useSWR` and pass the key you want to use. It will be pased
    // to the fetcher function. The fetcher function can be configured globally
    // or passed as one of the options to this function.
    const { data } = useSWR("https://jsonplaceholder.typicode.com/posts");
</script>

<div>
    {#if $data}
        {#each $data as post (post.id)}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        {/each}
    {/if}
</div>
  