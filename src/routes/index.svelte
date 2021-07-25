<script>
    import Toggle from '$lib/Toggle.svelte';
    // import Accordion from "$lib/Accordion.svelte";
    import BetterAccordion from "$lib/BetterAccordion.svelte";
    import SearchFilter from "$lib/SearchFilter.svelte";
    import Field from "$lib/Field.svelte";
    import Markdown from "$lib/Markdown.svelte";
    import Portal from "$lib/Portal.svelte";
    import Modal from "$lib/Modal.svelte";
    import Toast from "$lib/Toast/Toast.svelte";
    import { toast } from "$lib/Toast/toast";

    let isToggled = false;

    let items = [
        'scott',
        'wes',
        'landon',
        'courtney',
        'lucie',
        'brooklyn',
    ];
    let search = '';

    let markdownText = 'hello text';

    let isModalOpen = false;
</script>

<h1>Toggle Component</h1>

<Toggle bind:isToggled label="Toggle label"/>
<Toggle bind:isToggled label="Toggle label 2" style="--background: red; --toggledButtonColor: green"/>

{#if isToggled}
    <h2>is toggled</h2>
{/if}

<!--<h1>Accordion Component</h1>-->
<!--<Accordion buttonText="+">-->
<!--    <p>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--    </p>-->
<!--</Accordion>-->
<!--<Accordion isOpen={false} buttonText="+">-->
<!--    <p>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--    </p>-->
<!--</Accordion>-->

<h1>BetterAccordion Component</h1>
<BetterAccordion isOpen={false} buttonText="Toggle this button">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</BetterAccordion>

<h1>Search & Filter: {search}</h1>
<SearchFilter style="--listItemBackground: aqua" items={items} bind:search />

<h1>Portal</h1>
<Portal>
    <h1>Markdown</h1>
    <Markdown bind:text={markdownText} />
</Portal>

<h1>Modal</h1>
<button on:click={() => isModalOpen = true}>Open modal</button>
<Modal bind:isModalOpen background={true}>
    <h1>Input Field</h1>
    <Field bind:value={search} label="Search" instructions="Type to search..." placeholder="Joe" />
    <Field value={0} label="Number" type="number" instructions="Type to search..." placeholder="Joe" />
</Modal>

<h1>Toast</h1>
<button on:click={() => toast.send('New message ' + Math.random())}>Add toast</button>

<Toast duration={3000} />