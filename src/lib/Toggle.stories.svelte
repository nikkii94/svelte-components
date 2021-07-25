<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Toggle from './Toggle.svelte';
</script>

<Meta title="Toggle" component={Toggle} />

<Template let:args>
    <Toggle {...args} on:click={args.onClick} />
</Template>

<Story name="Default" />

<Story name="With props" args={{
    label: 'Default toggle label',
    style: '--background: blue; --toggledButtonColor: red'
}}/>