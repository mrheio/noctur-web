<script>
    export let type = 'submit';
</script>

<button class="btn" {type} on:click><slot /></button>
