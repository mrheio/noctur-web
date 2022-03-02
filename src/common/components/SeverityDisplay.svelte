<script>
    export let severity;
</script>

<span
    class="dot"
    style={`background: ${
        severity === 'low' ? 'lime' : severity === 'medium' ? 'yellow' : 'red'
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
