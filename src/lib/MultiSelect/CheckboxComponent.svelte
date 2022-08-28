<script>
    export let name = 'New';
</script>

<fieldset>
    <legend>{name}</legend>
    <div>
        <input type="checkbox" id="last 30 days" name="new" value="last 30 days">
        <label for="last 30 days">Last 30 Days</label>
      </div>
      <div>
        <input type="checkbox" id="last 6 months" name="new" value="last 6 months">
        <label for="last 6 months">Last 6 Months</label>
      </div>
</fieldset>