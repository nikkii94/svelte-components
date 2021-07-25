<script>
    import { slide } from './slide';
    export let buttonText = '';
    export let isOpen = true;
    // https://unicode-table.com/en/25B2
</script>

<div class="wrapper">
    <button on:click={() => isOpen = !isOpen}>
        {buttonText}
        <span class:isOpen>▲</span>
    </button>
    <div class="accordion-content"
         use:slide={{isOpen, duration: 600}}
         on:animationEnd={() => console.log('ended')}>
        <div class="content-wrapper">
            <slot/>
        </div>
    </div>
    <div class="accordion-content"
         use:slide={{isOpen, duration: 200}}
         on:animationEnd={() => console.log('ended')}>
        <div class="content-wrapper">
            <slot/>
        </div>
    </div>
</div>

<style>
    .wrapper {
        padding: 0;
        margin-bottom: 10px;
    }

    button {
        display: block;
        border: solid 1px #333;
        width: 100%;
        text-align: left;
        padding: 5px;
        margin: 0;
        font-size: 16px;
    }

    span {
        margin-right: 5px;
        display: inline-block;
        transform: rotate(.25turn);
        transition: transform .3s ease;
    }

    .isOpen {
        transform: rotate(.5turn);
    }

    .accordion-content {
        border: 1px solid #f3f3f3;
        border-top: 0;
        font-size: 14px;
        line-height: 1.4;
    }

    .content-wrapper {
        padding: 10px;
    }
</style>