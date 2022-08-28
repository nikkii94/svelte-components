<script>
    // https://web.dev/building-a-multi-select-component/

    import CheckboxComponent from "./CheckboxComponent.svelte";

function handleInput(event) {
    // make selectedOptions iterable then reduce a new array object
    let selectData = Array.from(event.target.selectedOptions).reduce((data, opt) => {
        // parent optgroup label and option value are added to the reduce aggregator
        data.push([opt.parentElement.label.toLowerCase(), opt.value])
        return data
    }, []);
}

</script>

<form>
    <div role="status" class="sr-only" id="applied-filters"></div>
    <label>
        <select multiple title="Filter results by category" on:input={handleInput}>
            <optgroup>
                <option value="last 30 days">Last 30 Days</option>
                <option value="last 6 months">Last 6 Months</option>
            </optgroup>
        </select>
    </label>
    <CheckboxComponent />
</form>

<style lang="postcss">
    aside {
        counter-reset: filters;

        & :checked {
            counter-increment: filters;
        }

        & #applied-filters::before {
            content: counter(filters) " filters ";
        }
    }

    form {
        display: grid;
        gap: 2ch;
        max-inline-size: 30ch;
    }

    @media (pointer: coarse) {
        select[multiple] {
            display: block;
        }
    }

    fieldset {
        padding: 2ch;

        & > div + div {
            margin-block-start: 2ch;
        }

        & > div {
            display: flex;
            gap: 2ch;
            align-items: baseline;
        }
    }
</style>