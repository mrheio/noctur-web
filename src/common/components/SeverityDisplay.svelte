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
    }
</style>
