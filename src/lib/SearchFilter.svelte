<script>
    import { fade } from 'svelte/transition';
    export let items;
    export let search = '';
    export let style = '';
    let isFocused = false;

    $:filteredSearch = items.filter(item => {
        return  search === '' || item.toLowerCase().includes(search.toLowerCase());
    });
</script>

<div style={style}>
    <label>
        Search Names: <br />
        <input
                on:focus={() => isFocused = true}
                bind:value={search}
                type="text"
                placeholder="Search" />
    </label>

    {#if isFocused}
        <ul transition:fade={{ duration: 200 }}>
            {#each filteredSearch as item}
                <li transition:fade={{ duration: 200 }} on:click={() => {
                search = item;
                isFocused = false;
            }}>{item}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    div {
        display: inline-block;
        /*border: 1px solid red;*/
        position: relative;
    }

    input {
        padding: 7px;
        border: 1px solid #bbb;
        outline: none;
    }

    ul {
        position: absolute;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        border: 1px solid #f3f3f3;
    }

    li {
        cursor: pointer;
        padding: 7px 10px;
        transition: all .3s ease;
    }
    li:hover {
        background: var(--listItemBackground, #e3e3e3);
    }
</style>