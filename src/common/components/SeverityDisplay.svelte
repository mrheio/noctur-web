<script>
    export let need;
</script>

<span
    class="dot"
    style={`background: ${
        need === 'low' ? 'lime' : need === 'medium' ? 'yellow' : 'red'
    }`}
/>

<style>
    .dot {
        max-height: 16px;
        min-width: 16px;
        border-radius: 50%;
        display: inline-block;
    }
</style>
