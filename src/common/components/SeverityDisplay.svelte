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
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
</style>
